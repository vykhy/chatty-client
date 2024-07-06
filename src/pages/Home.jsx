import React from "react";
import ChatList from "../components/ChatList";
import ChatRoom from "../components/ChatRoom";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

function Home() {
  const { id: chatId } = useParams("id");

  return (
    <div>
      <Box
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        <ChatList style={{ width: "20%" }} />
        <Box style={{ width: "80%" }}>
          {chatId ? <ChatRoom chatId={chatId} /> : "No chat selected"}
        </Box>
      </Box>
    </div>
  );
}

export default Home;
