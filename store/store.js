import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser";
import chatsReducer from "./chats";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    chats: chatsReducer,
  },
});

export default store;
