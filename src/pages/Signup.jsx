import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { handleUserSignup } from "../services/userServices";

function Signup() {
  const handelSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log(data);
    handleUserSignup(data);
    return data;
  };

  return (
    <Box>
      <div>Signup</div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handelSignUp}
      >
        <TextField
          name="username"
          label="User Name"
          required
          type="string"
        ></TextField>
        <TextField name="email" label="Email" required type="email"></TextField>
        <TextField
          name="password"
          label="Password"
          required
          type="password"
        ></TextField>
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          required
          type="password"
        ></TextField>
        <Button type="submit">Sign Up</Button>
      </form>
    </Box>
  );
}

export default Signup;
