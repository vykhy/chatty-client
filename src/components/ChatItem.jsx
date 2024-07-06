import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChatItem({ chat }) {
  const navigate = useNavigate();
  const handleChatClick = () => {
    navigate(`/chat/${chat.chat_id}`);
  };
  const messageCount = chat.messages?.length || 0;
  return (
    <Box
      style={{ display: "flex", cursor: "pointer" }}
      onClick={handleChatClick}
    >
      <img width={20} height={20} src={chat.profile_picture || "./vite.svg"} />
      <Box>
        {" "}
        <Typography variant="h6">{chat.username}</Typography>
        <Typography variant="body2">
          {chat.messages[messageCount - 1]?.content || "No messages yet"}
        </Typography>
      </Box>
    </Box>
  );
}

export default ChatItem;
