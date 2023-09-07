import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllproducts } from "../services/apiProducts";
import ProductCard from "../components/ProductCard";
import Filters from "../features/Filters";

const Products = () => {
  const [page, setpage] = useState(1);
  const {
    isLoading,
    data: allProducts,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllproducts(9, page),
  });
  if (isLoading) return <h1>loading</h1>;
  return (
    <>
      <h1 className="my-5 text-center text-4xl underline">All Products</h1>
      <div className="mx-10 flex justify-between">
        <Filters />
        <div className="flex w-[75vw] flex-wrap justify-center gap-5">
          {allProducts.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
