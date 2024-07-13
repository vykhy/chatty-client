import { Button, ListItem, ListItemText } from "@mui/material";
import React from "react";
import useAxiosInstance from "../services/useAxiosInstance";

function UserItem({ user }) {
  const { axiosInstance } = useAxiosInstance();

  async function createChat() {
    const result = await axiosInstance.post("/chat/create", {
      userId: user.user_id,
    });
  }

  return (
    <ListItem>
      <img
        src={user.profile_picture || "./vite.svg"}
        height={20}
        style={{ marginRight: 10, borderRadius: "50%" }}
        width={20}
      />
      <ListItemText secondary={user.email}>{user.username}</ListItemText>
      <Button onClick={createChat} variant="contained">
        Create Chat
      </Button>
    </ListItem>
  );
}

export default UserItem;
