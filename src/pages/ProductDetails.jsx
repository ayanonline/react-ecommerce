import React, { useEffect, useState } from "react";
import ProductGallery from "../components/ProductGallery";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductDetails } from "../services/apiProducts";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["productDetails", productId] });
  }, [productId, queryClient]);

  const {
    isLoading,
    data: productDetails,
    error,
  } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => getProductDetails(productId),
  });

  if (error) return <h1>Something went wrong in server</h1>;
  if (isLoading) return <h1>loading</h1>;

  const {
    name,
    description,
    quantity: productQuantity,
    images,
    price,
  } = productDetails.product;
  return (
    <div className="mx-[20rem] my-10 flex gap-8">
      <ProductGallery images={images} />
      <section className="flex flex-col items-start gap-5">
        <h1>/Produts/{productId}</h1>
        <h1 className="text-3xl capitalize">{name}</h1>
        <p className="capitalize">{description}</p>
        <p className="text-xl font-bold text-green-500">₹{price}</p>
        <div>
          <button className="rounded-md border px-3 text-center text-2xl hover:bg-green-500 hover:text-white">
            -
          </button>
          <input
            type="text"
            className="w-10 text-center text-2xl outline-none"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="rounded-md border px-3 text-center text-2xl hover:bg-green-500 hover:text-white"
            hover:bg-green-500
            hover:text-white
          >
            +
          </button>
        </div>

        <button className="rounded-md border bg-green-500 px-4 py-2 text-xl text-white">
          Add to Cart
        </button>
      </section>
    </div>
  );
};

export default ProductDetails;
