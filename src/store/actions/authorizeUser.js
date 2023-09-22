import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/constrant";
import axios from "axios";

export const authorizeUser = createAsyncThunk(
  "user/authorizeUser",
  async (param, thunkAPI) => {
    try {
      const instance = axios.create({
        withCredentials: true,
      });
      const res = await instance.get(`${baseUrl}/user/me`);

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
