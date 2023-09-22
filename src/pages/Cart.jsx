import CartProductCard from "../features/cart/CartProductCard";
import CartSummary from "../features/cart/CartSummary";
import EmptyCart from "../features/cart/EmptyCart";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { isLoading, error, cart } = useCart();

  if (isLoading) return null;

  return cart.items.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="flex min-h-screen items-start justify-between bg-gray-100 px-[20rem] py-10">
      <section>
        {cart.items.map((item) => (
          <CartProductCard key={item._id} product={item} />
        ))}
      </section>
      <CartSummary cart={cart} />
    </div>
  );
};

export default Cart;
