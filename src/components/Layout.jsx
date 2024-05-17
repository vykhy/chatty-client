import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <Container>
      <Box>
        <Link to="/users">Users</Link>
        <Link to="/">Chats</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </Box>
      <Box>{children}</Box>
    </Container>
  );
}

export default Layout;
