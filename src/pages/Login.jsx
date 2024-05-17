import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { handleUserLogin } from "../services/userServices";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log(data);
    handleUserLogin(data);
    return data;
  };

  return (
    <Box>
      <div>Login</div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleLogin}
      >
        <TextField
          name="usernameOrEmail"
          label="User Name or Email"
          required
          type="string"
        ></TextField>
        <TextField
          name="password"
          label="Password"
          required
          type="password"
        ></TextField>
        <Button type="submit">Log In</Button>
      </form>
    </Box>
  );
}

export default Login;
