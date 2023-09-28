import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/login";
import { signup } from "../actions/signup";
import { authorizeUser } from "../actions/authorizeUser";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "user",
  initialState: { isLoading: true, isAuthenticated: false },
  reducers: {
    logout: (state) => {
      Cookies.remove("token");
      state.isAuthenticated = false;
      state.user = {};
    },
    updateUser: (state, action) => {
      return { ...state, user: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.user = {};
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error = action.payload;
      })
      .addCase(signup.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.user = {};
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error = action.payload;
      })
      .addCase(authorizeUser.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
        state.user = {};
        state.error = null;
      })
      .addCase(authorizeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(authorizeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error = action.payload;
      });
  },
});
export const { logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
