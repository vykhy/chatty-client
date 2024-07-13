import { Typography } from "@mui/material";
import React from "react";

function ChatRoomHeader({ chat }) {
  return (
    <Typography
      style={{ backgroundColor: "green", color: "white", width: "100%" }}
      variant={"h5"}
    >
      {chat.username}
    </Typography>
  );
}

export default ChatRoomHeader;
