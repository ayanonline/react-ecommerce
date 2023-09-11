import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
  "user/signup",
  async (userData, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/user/register", {
        method: "POST",
        body: userData,
      });
      const data = await res.json();
      if (res.status === 201) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
