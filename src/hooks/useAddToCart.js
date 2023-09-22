import { useMutation } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../services/apiCart";
import { useDispatch } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";
import toast from "react-hot-toast";

const useAddToCart = (productId, quantity) => {
  const dispatch = useDispatch();

  const { isLoading: isAddingToCart, mutate: addToCart } = useMutation({
    mutationFn: () => addToCartApi(productId, quantity),
    onSuccess: (data) => {
      dispatch(updateCart(data.cart.items));
      toast.success("Successfully added to cart");
    },
    onError: () => toast.error("Failed to add in cart"),
  });
  return { isAddingToCart, addToCart };
};

export default useAddToCart;
