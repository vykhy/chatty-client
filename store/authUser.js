import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    login(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return {};
    },
  },
});

export const { login, logout } = authUserSlice.actions;
export default authUserSlice.reducer;
