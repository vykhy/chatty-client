import React from "react";
import Message from "./Message";
import { Box } from "@mui/material";

function MessageListContainer({ chat }) {
  const messages = chat?.messages || [];

  return (
    <Box style={{ height: "75vh", overflowY: "scroll" }}>
      {messages?.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </Box>
  );
}

export default MessageListContainer;
