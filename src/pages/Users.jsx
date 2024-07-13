import { Box, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserItem from "../components/UserItem";
import useAxiosInstance from "../services/useAxiosInstance";

function Users() {
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const { axiosInstance } = useAxiosInstance();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axiosInstance.get("/users?search=" + searchText);
        setUsers(result.data.data.users);
      } catch (error) {}
    };
    getUsers();
  }, [searchText]);

  return (
    <Box>
      <Container>
        <TextField
          value={searchText}
          style={{
            width: "100%",
            margin: "0.3rem",
          }}
          onChange={(e) => setSearchText(e.target.value)}
        ></TextField>
        <hr />
        {users?.map((user) => (
          <UserItem user={user} key={user.user_id} />
        ))}
      </Container>
    </Box>
  );
}

export default Users;
