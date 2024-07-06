import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./../store/store";
import { Provider } from "react-redux";
import { SocketProvider } from "./contexts/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocketProvider>
        <App />
      </SocketProvider>
    </Provider>
  </React.StrictMode>
);

// Initial load chats *
// Create chat test *
// Multi device support *
// Send message live *
// - Chat UI *
// - Message Box *
// - Message List *
// - Message Input *
// Receive message live *
// Load chats with messages in order *
// delivered and read receipts
// Group chats
// Message pagination
// User profiles
