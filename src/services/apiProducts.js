import { baseUrl } from "../utils/constrant";

export const getAllproducts = async (
  limit = 10,
  page,
  category,
  ratings = 0,
  maxPrice = 1000,
) => {
  try {
    let url = `${baseUrl}/products?limit=${limit}&page=${page}&ratings[gte]=${ratings}&price[lte]=${maxPrice}`;
    if (category) {
      url = `${baseUrl}/products?limit=${limit}&page=${page}&category=${category}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetails = async (productId) => {
  try {
    const res = await fetch(`${baseUrl}/products/${productId}`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    throw error;
  }
};
