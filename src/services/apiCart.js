import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

export const addToCart = async (productId, quantity) => {
  try {
    const res = await instance({
      method: "POST",
      url: "http://localhost:4000/api/v1/cart/add",
      data: {
        productId,
        quantity,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};