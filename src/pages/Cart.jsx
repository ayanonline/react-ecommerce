import { useQuery } from "@tanstack/react-query";
import { getAllCart } from "../services/apiCart";
import CartProductCard from "../components/CartProductCard";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    isLoading,
    error,
    data: cart,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCart,
  });

  if (isLoading) return null;

  return (
    <div className="flex items-start justify-between bg-gray-100 px-[20rem] py-10">
      <section>
        {cart.items.map((item) => (
          <CartProductCard key={item._id} product={item} />
        ))}
      </section>
      <Link to="/order">
        <CartSummary cart={cart} />
      </Link>
    </div>
  );
};

export default Cart;
