import { useQuery } from "@tanstack/react-query";
import { getAllCart } from "../services/apiCart";
import CartProductCard from "../components/CartProductCard";

const Cart = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCart,
  });

  if (isLoading) return null;
  return (
    <div className="bg-gray-100 px-[20rem] py-10">
      <section>
        {data.cart.items.map((item) => (
          <CartProductCard key={item._id} product={item} />
        ))}
      </section>
    </div>
  );
};

export default Cart;
