import { Box, Button, Container } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/authUser";
import { Logout } from "@mui/icons-material";

const links = [
  { path: "/", text: "Chats" },
  { path: "/users", text: "Users" },
];

function Layout({ children }) {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box>
      {authUser.user_id && (
        <Box
          style={{
            height: "3 rem",
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            padding: "0.5rem 2.5% ",
          }}
          width={"95%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {links.map((link, i) => (
            <LinkItem key={i} path={link.path} text={link.text} />
          ))}
          <LinkItem path="/login" onClick={handleLogout} text={<Logout />} />
        </Box>
      )}

      <Box>{children}</Box>
    </Box>
  );
}

const LinkItem = ({ path, text, ...others }) => (
  <Link
    style={{
      color: "white",
      fontSize: "1.5 rem",
      fontWeight: "600",
      textAlign: "center",
      textDecoration: "none",
    }}
    to={path}
    {...others}
  >
    {text}
  </Link>
);

export default Layout;
