import axios from "axios";

export const getUserDetails = async () => {
  // Create a Headers object
  const instance = axios.create({
    withCredentials: true,
  });
  const res = await instance.get("http://localhost:4000/api/v1/user/me");
  return res.data.user;
};
