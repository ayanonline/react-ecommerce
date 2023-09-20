import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

export const createOrder = async (orderData) => {
  try {
    const { data } = await instance.post(
      "http://localhost:4000/api/v1/order",
      orderData,
    );

    console.log(data);
  } catch (error) {
    throw error;
  }
};
