export const getAllproducts = async (
  limit = 10,
  page,
  category,
  ratings = 0,
  maxPrice = 1000,
) => {
  let url = `http://localhost:4000/api/v1/products?limit=${limit}&page=${page}&ratings[gte]=${ratings}&price[lte]=${maxPrice}`;
  if (category) {
    url = `http://localhost:4000/api/v1/products?limit=${limit}&page=${page}&category=${category}`;
  }
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getProductDetails = async (productId) => {
  const res = await fetch("http://localhost:4000/api/v1/products/" + productId);
  const data = await res.json();
  return data;
};
