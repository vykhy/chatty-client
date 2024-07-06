// SocketContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  addChat,
  addNewMessage,
  chatsLoaded,
  removeChats,
} from "../../store/chats";
import useAxiosInstance from "../services/useAxiosInstance";

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_BACKEND_URL
    : process.env.REACT_APP_BACKEND_URL;

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const authUser = useSelector((state) => state.authUser);
  const [socket, setSocket] = useState(null);
  const { axiosInstance } = useAxiosInstance();

  const dispatch = useDispatch();

  // handle socket connection
  useEffect(() => {
    const userId = authUser?.user_id;

    if (!userId && socket) {
      socket.disconnect();
    }
    if (!userId) return;
    const newSocket = io(url, {
      query: { user_id: userId },
    });

    newSocket.on("connect", () => {
      setSocket(newSocket);
    });

    return () => {
      socket?.disconnect();
      setSocket(null);
    };
  }, [authUser?.user_id]);

  useEffect(() => {
    if (!socket) return;

    socket?.on("chat-created", (data) => dispatch(addChat(data)));
    socket?.on("new-message", (data) => dispatch(addNewMessage(data)));

    return () => {
      socket?.off("chat-created");
      socket?.off("new-message");
    };
  }, [socket]);

  // handle chat load
  useEffect(() => {
    if (!authUser?.user_id) {
      dispatch(removeChats());
      return;
    }

    const getChats = async () => {
      const { data } = await axiosInstance.get("/chat");
      dispatch(chatsLoaded(data?.chats || []));
    };
    getChats();
  }, [authUser?.user_id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
