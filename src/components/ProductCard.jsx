import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="my-2 flex flex-col items-center gap-4 rounded-md border px-10 py-4 shadow-lg">
      <Link to={"/products/" + product._id}>
        <img
          src={product.thumbnail}
          alt="product image"
          className="h-[15rem] w-[20rem] object-contain"
        />
      </Link>
      <h1 className="text-3xl">{product.name}</h1>
      <p className="text-lg">
        <span>{product.quantity}</span>
        <span className="ml-4 text-green-500">₹{product.price}</span>
      </p>

      <div>
        <button className="rounded-md border px-3 text-center text-4xl hover:bg-green-500 hover:text-white">
          -
        </button>
        <input
          type="text"
          className="w-10 text-center text-3xl outline-none"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
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
