import { useEffect, useState } from "react";
import ProductGallery from "../components/ProductGallery";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductDetails } from "../services/apiProducts";
import { addToCart } from "../services/apiCart";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const queryClient = useQueryClient();

  const dispatch = useDispatch();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["productDetails", productId] });
  }, [productId, queryClient]);

  // adding product into cart
  const { isLoading: isAddingToCart, mutate } = useMutation({
    mutationFn: () => addToCart(productId, quantity),
    onSuccess: (data) => {
      dispatch(updateCart(data.cart.items));
      toast.success("Successfully added to cart");
    },
    onError: () => toast.error("Failed to add in cart"),
  });

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
  } = productDetails;

  return (
    <div className="mx-[20rem] my-10 flex gap-8">
      <ProductGallery images={images} />
      <section className="flex flex-col items-start gap-5">
        <h1>/Produts/{productId}</h1>
        <h1 className="text-3xl capitalize">{name}</h1>
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
          <input
            type="text"
            className="w-10 text-center text-2xl outline-none"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="rounded-md border px-3 text-center text-2xl hover:bg-green-500 hover:text-white"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="rounded-md border bg-green-500 px-4 py-2 text-xl text-white"
          onClick={mutate}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? "Adding to cart..." : "Add to Cart"}
        </button>
      </section>
    </div>
  );
};

export default ProductDetails;
