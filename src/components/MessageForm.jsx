import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSocket } from "../contexts/SocketContext";
import { useSelector } from "react-redux";

function MessageForm({ chatId }) {
  const [text, setText] = useState("");
  const authUser = useSelector((state) => state.authUser);
  const socket = useSocket();

  const handleSend = () => {
    if (text.trim() === "") return;
    socket.emit("send-message", {
      chat_id: chatId,
      user_id: authUser.user_id,
      content: text,
    });
    setText("");
  };
  return (
    <Box
      style={{
        display: "flex",
      }}
    >
      <TextField
        value={text}
        style={{ width: "90%" }}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
      />
      <Button variant="contained" style={{ width: "10%" }} onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
}

export default MessageForm;
