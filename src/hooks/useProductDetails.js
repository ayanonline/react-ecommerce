import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../services/apiProducts";
const useProductDetails = (productId) => {
  const {
    isLoading,
    data: productDetails,
    error,
  } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: () => getProductDetails(productId),
  });
  return { isLoading, productDetails, error };
};

export default useProductDetails;
