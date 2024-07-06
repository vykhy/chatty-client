import { Box, Button, Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/authUser";

function Layout({ children }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Box>
        <Link to="/users">Users</Link>
        <Link to="/">Chats</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Button onClick={handleLogout}>Log Out</Button>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
}

export default Layout;
