import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authorizeUser = createAsyncThunk(
  "user/authorizeUser",
  async (param, thunkAPI) => {
    try {
      const instance = axios.create({
        withCredentials: true,
      });
      const res = await instance.get("http://localhost:4000/api/v1/user/me");

      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
