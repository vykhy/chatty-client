import React from "react";
import { useSelector } from "react-redux";
import ChatItem from "./ChatItem";
import { Box } from "@mui/material";

function ChatList({ ...others }) {
  const chats = useSelector((state) => state.chats);
  return (
    <Box
      style={{
        overflowY: "scroll",
        height: "90vh",
        minWidth: "15vw",
        width: "15rem",
      }}
    >
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
      {chats?.map((chat) => (
        <ChatItem chat={chat} key={Math.random()} />
      ))}{" "}
    </Box>
  );
}

export default ChatList;
