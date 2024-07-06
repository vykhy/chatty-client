import React from "react";
import { useSelector } from "react-redux";
import ChatItem from "./ChatItem";

function ChatList() {
  const chats = useSelector((state) => state.chats);
  return (
    <div>
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={chat.chat_id} />
      ))}{" "}
    </div>
  );
}

export default ChatList;
