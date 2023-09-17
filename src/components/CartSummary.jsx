import { Link } from "react-router-dom";

const CartSummary = ({ cart }) => {
  return (
    <section className="sticky top-28 w-[30rem] rounded-lg border-2 bg-white p-6">
      <h1 className="text-3xl">Cart summary</h1>
      <hr className="my-6" />
      <div className="flex justify-between text-2xl">
        <span>Orders</span>
        <span className="flex w-20 items-center justify-center bg-green-500 text-lg text-white">
          {cart?.totalItems} items
        </span>
      </div>
      <div className="mt-5 flex justify-between text-2xl">
        <span>Total</span>
        <span className="font-bold text-green-500">₹{cart?.totalAmount}</span>
      </div>
      <hr className="my-6" />
      <Link to="/order">
        <button className="w-full bg-green-500 px-4 py-2 text-2xl text-white">
          Proceed
        </button>
      </Link>
    </section>
  );
};

export default CartSummary;
