import React from "react";

function Message({ message }) {
  return (
    <div>
      {message.content} {message.delivered_at ? "X" : ""}
      {message.read_at ? "R" : ""}
    </div>
  );
}

export default Message;
