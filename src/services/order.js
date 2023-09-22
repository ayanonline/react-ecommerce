import axios from "axios";
import { baseUrl } from "../utils/constrant";

const instance = axios.create({
  withCredentials: true,
});

export const createOrder = async (orderData) => {
  try {
    const { data } = await instance.post(`${baseUrl}/order`, orderData);
    console.log(data);
  } catch (error) {
    throw error;
  }
};
