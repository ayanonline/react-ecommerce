import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { baseUrl } from "../../utils/constrant";

export const login = createAsyncThunk(
  "user/login",
  async (userData, thunkAPI) => {
    try {
      const res = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        Cookies.set("token", data.token, { expires: 5 });
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
