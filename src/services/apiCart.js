import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

export const addToCart = async (productId, quantity = 1) => {
  try {
    const res = await instance({
      method: "POST",
      url: "http://localhost:4000/api/v1/cart/",
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

export const getAllCart = async () => {
  try {
    const res = await instance.get("http://localhost:4000/api/v1/cart/");
    return res.data.cart;
  } catch (error) {
    throw error;
  }
};
