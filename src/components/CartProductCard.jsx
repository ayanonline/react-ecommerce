import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const { product: productDetails } = product;

  return (
    <div className="my-4 w-[30rem] rounded-md bg-white p-4">
      <div className="flex">
        <Link to={"/products/" + productDetails._id}>
          <img
            src={productDetails.thumbnail}
            alt="pimage"
            className="h-28 w-44 rounded-md object-cover"
          />
        </Link>

        <div className="flex w-full justify-around">
          <div className="ml-2 flex flex-col items-start gap-2">
            <h1 className="text-2xl font-semibold">{productDetails.name}</h1>
            <h2 className="text-lg">{productDetails.quantity}</h2>
            <h3 className="text-2xl font-bold text-green-500">
              ₹{productDetails.price}
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <button
                className="rounded-md border px-2 text-center text-xl hover:bg-green-500 hover:text-white"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <input
                type="text"
                className="w-10 text-center text-xl outline-none"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className="rounded-md border px-2 text-center text-xl hover:bg-green-500 hover:text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="rounded border-2 px-2 hover:border-none hover:bg-red-500 hover:text-white">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
