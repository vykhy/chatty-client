import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {
    login(state, action) {
      state.value = action.payload;
    },
    logout(state, action) {
      state.value = {};
    },
  },
});

export const { login, logout } = authUserSlice.actions;
export default authUserSlice.reducer;
