import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="relative flex h-[93vh] flex-col items-center justify-start px-[20rem] py-20">
      <h1 className="text-5xl font-bold capitalize text-gray-400">
        Your Cart is empty
      </h1>
      <img
        src="/empty-cart.jpg"
        alt="empty cart image"
        className="-z-10 -mt-8 h-[30rem] opacity-40 grayscale filter"
      />
      <Link to="/products">
        <button className="rounded-md bg-green-500 px-10 py-4 text-xl text-white">
          Shop now
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
