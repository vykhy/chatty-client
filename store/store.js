import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
  },
});

export default store;
