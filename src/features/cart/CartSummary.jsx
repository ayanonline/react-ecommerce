import { Link } from "react-router-dom";

const CartSummary = ({ cart }) => {
  return (
    <section className="w-full rounded-lg border-2 bg-white p-3 lg:sticky lg:top-28 lg:w-[40rem] lg:p-6">
      <h1 className="text-sm lg:text-3xl">Cart summary</h1>
      <hr className="my-2 lg:my-6" />
      <div className="flex justify-between text-xs lg:text-2xl">
        <span>Orders</span>
        <span className="flex items-center justify-center bg-green-500 px-2 text-xs text-white lg:text-lg">
          {cart?.totalItems} items
        </span>
      </div>
      <div className="mt-5 flex justify-between text-xs lg:text-2xl">
        <span>Total</span>
        <span className="font-bold text-green-500">₹{cart?.totalAmount}</span>
      </div>
      <hr className="my-2 lg:my-6" />
      <Link to="/checkout">
        <button className="w-full bg-green-500 px-4 py-2 text-xs text-white lg:text-2xl">
          Proceed
        </button>
      </Link>
    </section>
  );
};

export default CartSummary;
