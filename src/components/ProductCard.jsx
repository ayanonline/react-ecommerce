import React, { useState } from "react";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="my-2 flex flex-col items-center gap-4 rounded-md border px-10 py-4 shadow-lg">
      <img
        src="/meats.png"
        alt="product image"
        className="h-[15rem] w-[20rem] object-contain"
      />
      <h1 className="text-3xl">Product name</h1>
      <p className="text-lg">
        <span>quantity</span> <span className="text-green-500">price</span>
      </p>

      <div>
        <button className="rounded-md border px-3 text-center text-4xl hover:bg-green-500 hover:text-white">
          -
        </button>
        <input
          type="text"
          className="w-10 text-center text-3xl"
          value={quantity}
        />
        <button
          className="rounded-md border px-3 text-center text-4xl hover:bg-green-500 hover:text-white"
          hover:bg-green-500
          hover:text-white
        >
          +
        </button>
      </div>

      <button className="rounded-md border border-black px-20 py-4 text-xl hover:border-none hover:bg-green-500 hover:text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
