import Filters from "../features/Filters";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  return (
    <>
      <h1 className="mt-4 text-center text-4xl underline">All Products</h1>
      <div className="mx-10 flex justify-between">
        <Filters />
        <ProductsContainer />
      </div>
    </>
  );
};

export default Products;
