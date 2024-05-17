import { Button, ListItem, ListItemText } from "@mui/material";
import React from "react";

function UserItem({ user }) {
  return (
    <ListItem>
      <ListItemText>{user.username}</ListItemText>
      <Button variant="contained">Create Chat</Button>
    </ListItem>
  );
}

export default UserItem;
