import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/constrant";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}/user/login`,
        {
          email: userData.email,
          password: userData.password,
        },
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
