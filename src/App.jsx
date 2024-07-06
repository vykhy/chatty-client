import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useEffect } from "react";
import "./App.css";
import Routes from "./Routes";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useSocket } from "./contexts/SocketContext";

function App() {
  const authUser = useSelector((state) => state.authUser.value);
  const socket = useSocket();

  console.log(socket);

  return (
    <>
      {socket?.connected ? "Connected" : "Not connected"}
      {JSON.stringify(socket?.id)}
      <br />
      <Routes />
      <Button
        onClick={() => {
          if (socket) socket.connect();
          console.log(socket);
        }}
      >
        Connect
      </Button>
    </>
  );
}

export default App;
