import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import { handleUserSignup } from "../services/userServices";
import { Link } from "react-router-dom";

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
      <Container>
        <h3>Signup</h3>

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
            style={{ marginBottom: "2.5rem" }}
            required
            type="string"
          ></TextField>
          <TextField
            name="email"
            label="Email"
            style={{ marginBottom: "2.5rem" }}
            required
            type="email"
          ></TextField>
          <TextField
            name="password"
            label="Password"
            style={{ marginBottom: "2.5rem" }}
            required
            type="password"
          ></TextField>
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            style={{ marginBottom: "2.5rem" }}
            required
            type="password"
          ></TextField>
          <Button
            variant="contained"
            style={{ marginBottom: "2.5rem" }}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <Link to="/login">Already have an account? Log In</Link>
      </Container>
    </Box>
  );
}

export default Signup;
