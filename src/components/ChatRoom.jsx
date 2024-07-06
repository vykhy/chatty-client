import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatRoomHeader from "./ChatRoomHeader";
import MessageListContainer from "./MessageListContainer";
import MessageForm from "./MessageForm";
import { useSocket } from "../contexts/SocketContext";

function ChatRoom({ chatId }) {
  const chat = useSelector((state) =>
    state.chats.find((chat) => chat.chat_id == chatId)
  );
  const authUser = useSelector((state) => state.authUser);

  const socket = useSocket();

  useEffect(() => {
    chat.messages?.forEach((message) => {
      if (!message.read_at && message.user_id != authUser.user_id) {
        console.log(message.content);
        socket?.emit("message-read", {
          message_id: message.message_id,
          user_id: authUser.user_id,
          chat_id: chatId,
        });
      }
    });
  }, [chatId, chat.messages.length, socket]);

  return (
    <div>
      <ChatRoomHeader chat={chat} />
      <MessageListContainer chat={chat} />
      <MessageForm chatId={chat.chat_id} />
    </div>
  );
}

export default ChatRoom;
