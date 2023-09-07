export const getAllproducts = async (limit = 10) => {
  const res = await fetch(
    "http://localhost:4000/api/v1/products?limit=" + limit,
  );
  const data = await res.json();
  return data;
};

export const getProductDetails = async (productId) => {
  const res = await fetch("http://localhost:4000/api/v1/products/" + productId);
  const data = await res.json();
  return data;
};
