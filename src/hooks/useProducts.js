import { useQuery } from "@tanstack/react-query";
import { getAllproducts } from "../services/apiProducts";

const useProducts = (limit, page, category, ratings, maxPrice) => {
  const {
    isLoading,
    data: productsData,
    error,
  } = useQuery({
    queryKey: ["products", [page, category, ratings, maxPrice]],
    queryFn: () => getAllproducts(limit, page, category, ratings, maxPrice),
  });
  return { isLoading, productsData, error };
};

export default useProducts;
