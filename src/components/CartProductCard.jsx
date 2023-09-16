import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteItem, updateItem } from "../services/apiCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";
import toast from "react-hot-toast";

const CartProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isQuntityChanged, setIsQuantityChanged] = useState(false);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  useEffect(() => {
    if (isQuntityChanged) {
      updateHandle();
      setIsQuantityChanged(false);
    }
  }, [quantity]);

  const { product: productDetails } = product;

  const { isLoading: isDeleting, mutate: deleteHandle } = useMutation({
    mutationFn: () => deleteItem(productDetails._id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      dispatch(updateCart(data.cart.items));
      toast.success("Item deleted from cart successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  const { isLoading: isUpdating, mutate: updateHandle } = useMutation({
    mutationFn: () => updateItem(productDetails._id, quantity),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      dispatch(updateCart(data.cart.items));
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="mb-4 w-[40rem] rounded-lg border-2 bg-white p-4">
      <div className="flex">
        <Link to={"/products/" + productDetails._id}>
          <img
            src={productDetails.thumbnail}
            alt="pimage"
            className="h-28 w-44 rounded-md object-cover"
          />
        </Link>

        <div className="ml-4 flex w-full flex-col justify-around">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{productDetails.name}</h1>
            <h4 className="flex items-center text-2xl">
              Subtotal:
              <span className="ml-2 text-2xl font-bold text-green-500">
                ₹{product.subtotal}
              </span>
            </h4>
          </div>
          <div className="flex items-center gap-5">
            <h3>Price: ₹{productDetails.price}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button
                disabled={isUpdating || isDeleting}
                className="rounded-md border px-2 text-center text-xl hover:bg-green-500 hover:text-white"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                    setIsQuantityChanged(true);
                  }
                }}
              >
                -
              </button>
              <span className="px-2">{quantity}</span>
              <button
                disabled={isUpdating || isDeleting}
                className="rounded-md border px-2 text-center text-xl hover:bg-green-500 hover:text-white"
                onClick={() => {
                  setQuantity(quantity + 1);
                  setIsQuantityChanged(true);
                }}
              >
                +
              </button>
            </div>
            <button onClick={deleteHandle} disabled={isDeleting}>
              <HiOutlineTrash className="h-6 w-6 cursor-pointer text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
