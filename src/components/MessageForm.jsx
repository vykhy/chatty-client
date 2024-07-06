import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSocket } from "../contexts/SocketContext";
import { useSelector } from "react-redux";

function MessageForm({ chatId }) {
  const [text, setText] = useState("");
  const authUser = useSelector((state) => state.authUser);
  const socket = useSocket();

  const handleSend = () => {
    socket.emit("send-message", {
      chat_id: chatId,
      user_id: authUser.user_id,
      content: text,
    });
    setText("");
  };
  return (
    <Box style={{ display: "flex" }}>
      <TextField value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleSend}>Send</Button>
    </Box>
  );
}

export default MessageForm;
