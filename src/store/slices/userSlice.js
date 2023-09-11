import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/login";

const userSlice = createSlice({
  name: "user",
  initialState: {},
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
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
