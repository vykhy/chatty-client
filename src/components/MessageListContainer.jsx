import React from "react";
import Message from "./Message";

function MessageListContainer({ messages = [] }) {
  return (
    <div>
      {messages?.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </div>
  );
}

export default MessageListContainer;
