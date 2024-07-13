import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Routes from "./Routes";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { useSocket } from "./contexts/SocketContext";

function App() {
  const authUser = useSelector((state) => state.authUser);
  const socket = useSocket();

  return (
    <Box>
      <Routes />
    </Box>
  );
}

export default App;
