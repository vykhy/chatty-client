import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";
import { handleUserLogin } from "../services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authUser";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const currentUser = useSelector((state) => state.authUser);
  const navigate = useNavigate();
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
    dispatch(login({ ...result.data.user, token: result.data.token }));
    navigate("/");
    return result;
  };

  return (
    <Box>
      <Container>
        <h3>Log In</h3>
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
            style={{ marginBottom: "2.5rem" }}
            type="string"
          ></TextField>
          <TextField
            name="password"
            label="Password"
            required
            style={{ marginBottom: "2.5rem" }}
            type="password"
          ></TextField>
          <Button
            style={{ marginBottom: "2.5rem" }}
            variant="contained"
            type="submit"
          >
            Log In
          </Button>
        </form>
        <Link to="/signup">Don't have an account yet? Sign Up</Link>
      </Container>
    </Box>
  );
}

export default Login;
