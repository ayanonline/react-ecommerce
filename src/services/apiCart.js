import axios from "axios";
import { baseUrl } from "../utils/constrant";

const instance = axios.create({
  withCredentials: true,
});

// Add to cart
export const addToCart = async (productId, quantity = 1) => {
  try {
    const res = await instance({
      method: "POST",
      url: `${baseUrl}/cart/`,
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

// get
export const getAllCart = async () => {
  try {
    const res = await instance.get(`${baseUrl}/cart/`);
    return res.data.cart;
  } catch (error) {
    throw error;
  }
};

// delete
export const deleteItem = async (productId) => {
  try {
    const res = await instance.delete(`${baseUrl}/cart/${productId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// update
export const updateItem = async (productId, quantity) => {
  try {
    const res = await instance({
      method: "PATCH",
      url: `${baseUrl}/cart/${productId}`,
      data: {
        quantity,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
