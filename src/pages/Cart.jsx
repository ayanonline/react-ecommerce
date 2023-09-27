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
    <div className="mb-10 flex min-h-screen flex-col items-start bg-gray-100 px-5 py-10 lg:mb-0 lg:flex-row lg:justify-between lg:px-[20rem]">
      <section className="w-full">
        {cart.items.map((item) => (
          <CartProductCard key={item._id} product={item} />
        ))}
      </section>
      <CartSummary cart={cart} />
    </div>
  );
};

export default Cart;
