import { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Routes from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
