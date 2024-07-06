import React from "react";
import Message from "./Message";

function MessageListContainer({ chat }) {
  const messages = chat?.messages || [];

  return (
    <div>
      {messages?.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </div>
  );
}

export default MessageListContainer;
