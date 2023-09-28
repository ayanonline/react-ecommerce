import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/constrant";
import axios from "axios";

export const signup = createAsyncThunk(
  "user/signup",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/user/register`, userData, {
        withCredentials: true, // Include cookies with the request
      });

      if (response.status === 201) {
        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
