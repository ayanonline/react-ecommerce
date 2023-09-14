import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { addToCart } from "../services/apiCart";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { updateCart } from "../store/slices/cartSlice";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { isLoading, mutate } = useMutation({
    mutationFn: () => addToCart(product._id, quantity),
    onSuccess: (data) => {
      dispatch(updateCart(data.cart.items));
      toast.success("Successfully added to cart");
    },
    onError: () => toast.error("Failed to add in cart"),
  });

  return (
    <div className="my-2 flex w-[25rem] flex-col items-center gap-4 rounded-md border px-10 py-4 shadow-lg">
      <Link to={"/products/" + product._id}>
        <img
          src={product.thumbnail}
          alt="product image"
          className="h-[15rem] w-[20rem] border object-cover"
        />
      </Link>
      <h1 className="text-3xl">{product.name}</h1>
      <div className="flex items-center">
        <div className="mr-1 flex items-center">
          <AiFillStar className="mr-1 text-xl text-green-600" />
          {product.ratings}.0
        </div>
        ({product.numOfReviews})
      </div>

      <p className="text-lg">
        <span>{product.quantity}</span>
        <span className="ml-4 text-green-500">₹{product.price}</span>
      </p>

      <div>
        <button
          className="rounded-md border px-3 text-center text-4xl hover:bg-green-500 hover:text-white"
          onClick={() => {
            if (quantity > 1) setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <input
          type="text"
          className="w-10 text-center text-3xl outline-none"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="rounded-md border px-3 text-center text-4xl hover:bg-green-500 hover:text-white"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      <button
        className="rounded-md border border-black px-20 py-4 text-xl hover:border-none hover:bg-green-500 hover:text-white"
        onClick={mutate}
        disabled={isLoading}
      >
        {isLoading ? "Adding to cart..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
