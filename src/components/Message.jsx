import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function Message({ message }) {
  const authUser = useSelector((state) => state.authUser);
  const myMessageStyle = {
    marginBottom: "1.5rem",
    padding: "0.7rem",
    marginLeft: "20%",
    backgroundColor: "yellow",
    textAlign: "left",
    width: "80%",
  };
  const otherMessageStyle = {
    marginBottom: "1.5rem",
    padding: "0.7rem",
    marginRight: "20%",
    backgroundColor: "#eee",
    textAlign: "left",
    maxWidth: "80%",
  };
  return (
    <Box
      style={
        message.user_id === authUser.user_id
          ? myMessageStyle
          : otherMessageStyle
      }
    >
      {message.content} {message.delivered_at ? "X" : ""}
      {message.read_at ? "R" : ""}
    </Box>
  );
}

export default Message;
