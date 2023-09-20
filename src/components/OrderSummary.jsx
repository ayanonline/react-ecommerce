import useCart from "../hooks/useCart";
import { createOrder } from "../services/order";

const OrderSummary = ({ isAddressSelected, selectedAddress }) => {
  const { isLoading, error, cart } = useCart();
  if (isLoading) return null;

  const shippingPrice = cart.totalAmount >= 500 ? 0 : 40;
  const totalPrice = cart.totalAmount + shippingPrice;

  const orderOption = {
    itemPrice: cart.totalAmount,
    taxPrice: 0,
    shippingPrice,
    totalPrice,
    orderItems: cart.items,
    shippingInfo: selectedAddress,
  };
  const checkoutHandler = () => {
    createOrder(orderOption);
  };

  return (
    <section className="sticky top-28 w-[30rem] rounded-lg border-2 bg-white p-6">
      <h1 className="text-3xl">Order summary</h1>
      <hr className="my-6" />
      <div className="flex justify-between text-2xl">
        <span>Orders</span>
        <span className="flex w-20 items-center justify-center bg-green-500 text-lg text-white">
          {cart.items.length} items
        </span>
      </div>
      <div className="mt-5 flex justify-between text-2xl">
        <span>Price</span>
        <span className="font-bold text-green-500">₹{cart.totalAmount}</span>
      </div>
      <div className="mt-5 flex justify-between text-2xl">
        <span>ShippingPrice</span>
        <span className="font-bold text-green-500">₹{shippingPrice}</span>
      </div>
      <div className="mt-5 flex justify-between text-2xl">
        <span>Total</span>
        <span className="font-bold text-green-500">₹{totalPrice}</span>
      </div>
      <hr className="my-6" />

      <button
        disabled={!isAddressSelected}
        onClick={checkoutHandler}
        className="w-full bg-green-500 px-4 py-2 text-2xl text-white disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        Checkout
      </button>
    </section>
  );
};

export default OrderSummary;
