import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addChat(state, action) {
      state.value.push = action.payload;
    },
    logout(state, action) {
      state.value = {};
    },
  },
});

export const { login, logout } = authUserSlice.actions;
export default authUserSlice.reducer;
