import Filters from "../features/filters/Filters";
import ProductsContainer from "../features/products/ProductsContainer";

const Products = () => {
  return (
    <div className="mx-10 mt-10 flex min-h-screen justify-between">
      <Filters />
      <ProductsContainer />
    </div>
  );
};

export default Products;
