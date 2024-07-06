import React from "react";
import { useSelector } from "react-redux";
import ChatRoomHeader from "./ChatRoomHeader";
import MessageListContainer from "./MessageListContainer";
import MessageForm from "./MessageForm";

function ChatRoom({ chatId }) {
  const chat = useSelector((state) =>
    state.chats.find((chat) => chat.chat_id == chatId)
  );
  console.log({ chat });
  return (
    <div>
      <ChatRoomHeader chat={chat} />
      <MessageListContainer messages={chat?.messages} />
      <MessageForm chatId={chat.chat_id} />
    </div>
  );
}

export default ChatRoom;
