import axios from "axios";

const instance = axios.create({
  withCredentials: true,
});

// Add to cart
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

// get
export const getAllCart = async () => {
  try {
    const res = await instance.get("http://localhost:4000/api/v1/cart/");
    return res.data.cart;
  } catch (error) {
    throw error;
  }
};

// delete
export const deleteItem = async (productId) => {
  try {
    const res = await instance.delete(
      `http://localhost:4000/api/v1/cart/${productId}`,
    );
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
};
