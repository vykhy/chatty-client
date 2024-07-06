// SocketContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  addChat,
  addNewMessage,
  chatsLoaded,
  messageDelivered,
  messageRead,
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
  const chats = useSelector((state) => state.chats);
  const [socket, setSocket] = useState(null);
  const { axiosInstance } = useAxiosInstance();

  const dispatch = useDispatch();

  // handle socket connection and loading/unloading chats
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

      // load chats and mark delivered
      const getChats = async () => {
        const {
          data: { chats },
        } = await axiosInstance.get("/chat");
        chats?.forEach((chat) => {
          chat.messages.forEach((message) => {
            if (!message.delivered_at && message.user_id !== authUser.user_id) {
              newSocket.emit("message-delivered", {
                chat_id: chat.chat_id,
                message_id: message.message_id,
                user_id: authUser.user_id,
              });
            }
          });
        });
        dispatch(chatsLoaded(chats));
      };
      getChats();
    });

    return () => {
      socket?.disconnect();
      setSocket(null);
      dispatch(removeChats());
    };
  }, [authUser?.user_id]);

  // handle socket events
  useEffect(() => {
    if (!socket) return;

    socket?.on("chat-created", (data) => dispatch(addChat(data)));
    socket?.on("new-message", (data) => {
      if (data.user_id !== authUser.user_id)
        socket?.emit("message-delivered", {
          chat_id: data.chat_id,
          message_id: data.message_id,
          user_id: authUser.user_id,
        });
      dispatch(addNewMessage(data));
    });
    socket?.on("message-delivered", (data) => dispatch(messageDelivered(data)));
    socket?.on("message-read", (data) => dispatch(messageRead(data)));

    return () => {
      socket?.off("chat-created");
      socket?.off("new-message");
      socket?.off("message-delivered");
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
