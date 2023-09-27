import useCart from "../../hooks/useCart";
import { createOrder } from "../../services/order";

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
    <section className="w-full rounded-lg border-2 bg-white p-3 lg:sticky lg:top-28 lg:w-[40rem] lg:p-6">
      <h1 className="text-sm lg:text-3xl">Order summary</h1>
      <hr className="my-2 lg:my-6" />
      <div className="flex justify-between text-xs lg:text-2xl">
        <span>Orders</span>
        <span className="flex items-center justify-center bg-green-500 px-2 text-white">
          {cart.items.length} items
        </span>
      </div>
      <div className="mt-2 flex justify-between text-xs lg:mt-5 lg:text-2xl">
        <span>Price</span>
        <span className="font-bold text-green-500">₹{cart.totalAmount}</span>
      </div>
      <div className="mt-2 flex justify-between text-xs lg:mt-5 lg:text-2xl">
        <span>ShippingPrice</span>
        <span className="font-bold text-green-500">₹{shippingPrice}</span>
      </div>
      <div className="mt-2 flex justify-between text-xs lg:mt-5 lg:text-2xl">
        <span>Total</span>
        <span className="font-bold text-green-500">₹{totalPrice}</span>
      </div>
      <hr className="my-2 lg:my-6" />

      <button
        disabled={!isAddressSelected}
        onClick={checkoutHandler}
        className="w-full bg-green-500 px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-gray-300 lg:text-2xl"
      >
        Checkout
      </button>
    </section>
  );
};

export default OrderSummary;
