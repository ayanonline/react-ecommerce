import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import useAddToCart from "../../hooks/useAddToCart";

const ProductCard = ({ product }) => {
  const { isAddingToCart, addToCart } = useAddToCart(product._id);

  return (
    <div className="my-2 flex w-[10.5rem] flex-col items-center gap-1 rounded-md border p-4 shadow-lg lg:w-[25rem] lg:gap-4">
      <Link to={"/products/" + product._id}>
        <img
          src={product.thumbnail}
          alt="product image"
          className="h-[7rem] w-[8rem] border object-cover lg:h-[15rem] lg:w-[20rem]"
        />
      </Link>
      <h1 className="text-sm lg:text-3xl">{product.name}</h1>
      <div className="flex items-center">
        <div className="mr-1 flex items-center">
          <AiFillStar className="mr-1 text-xs text-green-600 lg:text-xl" />
          {product.ratings}.0
        </div>
        ({product.numOfReviews})
      </div>

      <p className="text-xs lg:text-lg">
        <span>{product.quantity}</span>
        <span className="ml-4 text-green-500">₹{product.price}</span>
      </p>

      <button
        className="rounded-md border border-black px-3 py-2 text-xs hover:border-none hover:bg-green-500 hover:text-white lg:px-20 lg:py-4 lg:text-xl"
        onClick={addToCart}
        disabled={isAddingToCart}
      >
        {isAddingToCart ? "Adding to cart..." : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
