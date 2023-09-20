import { useQuery } from "@tanstack/react-query";
import { getAllCart } from "../services/apiCart";

const useCart = () => {
  const {
    isLoading,
    error,
    data: cart,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCart,
  });
  return { isLoading, error, cart };
};

export default useCart;
