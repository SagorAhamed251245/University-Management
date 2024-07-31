import { createSlice } from "@reduxjs/toolkit";

type TAuth = {
  user: null | object;
  token: null | string;
};
const initialState: TAuth = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;
