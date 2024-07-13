import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ChatItem({ chat }) {
  const navigate = useNavigate();
  const handleChatClick = () => {
    navigate(`/chat/${chat.chat_id}`);
  };
  const messageCount = chat.messages?.length || 0;
  return (
    <ListItem
      style={{ display: "flex", cursor: "pointer" }}
      onClick={handleChatClick}
    >
      <img
        width={20}
        height={20}
        style={{ marginRight: 10, borderRadius: "50%" }}
        src={chat.profile_picture || "./vite.svg"}
      />
      <Box>
        {" "}
        <ListItemText
          secondary={
            chat.messages[messageCount - 1]?.content || "No messages yet"
          }
          variant="h6"
        >
          {chat.username}
        </ListItemText>
      </Box>
    </ListItem>
  );
}

export default ChatItem;
