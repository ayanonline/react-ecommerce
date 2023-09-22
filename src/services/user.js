import axios from "axios";
import { baseUrl } from "../utils/constrant";

const instance = axios.create({
  withCredentials: true,
});

export const updateUserProfile = async (userData) => {
  try {
    const res = await instance({
      method: "PATCH",
      url: `${baseUrl}/user/update-me`,
      data: userData,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const res = await instance.get(`${baseUrl}/user/me`);
    return res.data.user;
  } catch (error) {
    throw error;
  }
};
