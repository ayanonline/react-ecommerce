import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/constrant";

export const signup = createAsyncThunk(
  "user/signup",
  async (userData, thunkAPI) => {
    try {
      const res = await fetch(`${baseUrl}/user/register`, {
        method: "POST",
        credentials: "include",
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
