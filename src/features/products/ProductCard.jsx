import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import useAddToCart from "../../hooks/useAddToCart";

const ProductCard = ({ product }) => {
  const { isAddingToCart, addToCart } = useAddToCart(product._id);

  return (
    <div className="my-2 flex w-[25rem] flex-col items-center gap-4 rounded-md border px-10 py-4 shadow-lg">
      <Link to={"/products/" + product._id}>
        <img
          src={product.thumbnail}
          alt="product image"
          className="h-[15rem] w-[20rem] border object-cover"
        />
      </Link>
      <h1 className="text-3xl">{product.name}</h1>
      <div className="flex items-center">
        <div className="mr-1 flex items-center">
          <AiFillStar className="mr-1 text-xl text-green-600" />
          {product.ratings}.0
        </div>
        ({product.numOfReviews})
      </div>

      <p className="text-lg">
        <span>{product.quantity}</span>
        <span className="ml-4 text-green-500">₹{product.price}</span>
      </p>

      <button
        className="rounded-md border border-black px-20 py-4 text-xl hover:border-none hover:bg-green-500 hover:text-white"
        onClick={addToCart}
        disabled={isAddingToCart}
      >
        {isAddingToCart ? "Adding to cart..." : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
