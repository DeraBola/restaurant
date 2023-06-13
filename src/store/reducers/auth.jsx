import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  currentUser: localStorage.getItem("profile")

  // email: window.localStorage.getItem("email") ? JSON.parse(window.localStorage.getItem("email")) : "",
  // token:  window.localStorage.getItem("token") ? JSON.parse(window.localStorage.getItem("token")) : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("profile", payload.user);
      state.currentUser = payload.user;
      state.isLoggedIn = true;
      state.token = payload.token;
    },
    logoutUser: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      state.currentUser = {};
      state.isLoggedIn = false;
      state.token = null;
    },
    loadUser: (state, { payload }) => {
      state.currentUser = payload;
    }
  }
});

export const { loginUser, logoutUser, loadUser, userLogin } = authSlice.actions;

export default authSlice.reducer;
