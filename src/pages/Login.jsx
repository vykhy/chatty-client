import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { handleUserLogin } from "../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authUser";

function Login() {
  const currentUser = useSelector((state) => state.authUser.value);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const result = await handleUserLogin(data);
    console.log(result);
    dispatch(login({ ...result.data.user, token: result.data.token }));
    return result;
  };

  return (
    <Box>
      <div>Login {JSON.stringify(currentUser)}</div>
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
