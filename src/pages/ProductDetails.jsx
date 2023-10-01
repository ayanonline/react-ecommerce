import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import ProductGallery from "../components/ProductGallery";
import useProductDetails from "../hooks/useProductDetails";
import useAddToCart from "../hooks/useAddToCart";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["productDetails", productId] });
  }, [productId, queryClient]);

  const { isAddingToCart, addToCart } = useAddToCart(productId, quantity);

  const { isLoading, productDetails, error } = useProductDetails(productId);

  if (error) return <h1>Something went wrong in server</h1>;
  if (isLoading) return <h1>loading</h1>;

  const {
    name,
    description,
    quantity: productQuantity,
    images,
    price,
  } = productDetails;

  return (
    <div className="mx-5 my-10 flex flex-col gap-8 lg:mx-[20rem] lg:flex-row">
      <ProductGallery images={images} />
      <section className="flex flex-col items-start gap-2 lg:gap-5">
        {/* <h1>/Produts/{productId}</h1> */}
        <h1 className="capitalize lg:text-3xl">{name}</h1>
        <p className="capitalize">{description}</p>
        <p className="text-xl font-bold text-green-500">₹{price}</p>
        <div>
          <button
            className="rounded-md border px-3 text-center text-2xl hover:bg-green-500 hover:text-white"
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          <span className="px-2 text-xl">{quantity}</span>
          <button
            className="rounded-md border px-3 text-center text-2xl hover:bg-green-500 hover:text-white"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="rounded-md border bg-green-500 px-4 py-2 text-white lg:text-xl"
          onClick={addToCart}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? "Adding to cart..." : "Add to Cart"}
        </button>
      </section>
    </div>
  );
};

export default ProductDetails;
