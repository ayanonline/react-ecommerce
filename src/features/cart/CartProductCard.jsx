import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteItem, updateItem } from "../../services/apiCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { updateCart } from "../../store/slices/cartSlice";
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
    <div className="mb-2 w-full rounded-lg border-2 bg-white p-2 lg:mb-4 lg:w-[40rem] lg:p-4">
      <div className="flex">
        <Link to={"/products/" + productDetails._id}>
          <img
            src={productDetails.thumbnail}
            alt="pimage"
            className="h-full w-20 rounded-md object-cover lg:h-28 lg:w-44"
          />
        </Link>

        <div className="ml-4 flex w-full flex-col justify-around">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-sm font-semibold lg:text-2xl">
              {productDetails.name}
            </h1>
            <h4 className="flex items-center text-xs lg:text-2xl">
              Subtotal:
              <span className="ml-2 text-sm font-bold text-green-500 lg:text-2xl">
                ₹{product.subtotal}
              </span>
            </h4>
          </div>
          <div className="flex items-center gap-5 text-xs lg:text-base">
            <h3>Price: ₹{productDetails.price}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <button
                disabled={isUpdating || isDeleting}
                className="rounded-md border px-2 text-center text-sm hover:bg-green-500 hover:text-white lg:text-xl"
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
                className="rounded-md border px-2 text-center text-sm hover:bg-green-500 hover:text-white lg:text-xl"
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
