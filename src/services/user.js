import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

export const updateUserProfile = async (userData) => {
  try {
    const res = await instance({
      method: "PATCH",
      url: "http://localhost:4000/api/v1/user/update-me",
      data: userData,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async () => {
  // Create a Headers object

  const res = await instance.get("http://localhost:4000/api/v1/user/me");
  return res.data.user;
};
