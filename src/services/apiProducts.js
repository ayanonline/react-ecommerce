export const getAllproducts = async (limit = 10) => {
  const res = await fetch(
    "http://localhost:4000/api/v1/products?limit=" + limit,
  );
  const data = await res.json();
  return data;
};

export const getProductDetails = async () => {
  const res = await fetch(
    "http://localhost:4000/api/v1/products/64568ba9dc641567d154200e",
  );
  const data = await res.json();
  return data;
};
