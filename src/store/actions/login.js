import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
