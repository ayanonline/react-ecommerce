import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";

const CartProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  const { product: productDetails } = product;

  return (
    <div className="mb-4 w-[40rem] rounded-lg border-2 bg-white p-4">
      <div className="flex">
        <Link to={"/products/" + productDetails._id}>
          <img
            src={productDetails.thumbnail}
            alt="pimage"
            className="h-28 w-44 rounded-md object-cover"
          />
        </Link>

        <div className="ml-4 flex w-full flex-col justify-around">
          <div className="ml-2 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{productDetails.name}</h1>
            <h4 className="flex items-center text-2xl">
              subtotal:
              <span className="ml-2 text-2xl font-bold text-green-500">
                ₹{product.subtotal}
              </span>
            </h4>
          </div>
          <div className="flex items-center gap-5">
            <h2 className="text-lg">{productDetails.quantity}</h2>
            <h3>price: ₹{productDetails.price}</h3>
          </div>
          <div className="flex items-center justify-between">
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
            <HiOutlineTrash className="h-6 w-6 cursor-pointer text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
