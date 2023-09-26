import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";

const Button = ({ title }) => {
  return (
    <button className="min-w-[10rem] rounded-md border border-green-500 bg-white px-6 py-4 text-center text-sm text-slate-500">
      {title}
    </button>
  );
};

const OurProducts = () => {
  const { isLoading, productsData, error } = useProducts(6);

  return (
    <section className="mx-5 py-4 lg:mx-[20rem] lg:py-8">
      <h1 className="lg:mb-5 lg:text-5xl">Our Products</h1>
      <div className="relative hidden lg:block">
        <div className="absolute top-1/2 z-0 h-[1px] w-full bg-green-500"></div>
        <div className="relative z-20 flex justify-between">
          <Button title="All Items" />
          <Button title="Food & Drinks" />
          <Button title="Fruits & Vegetables" />
          <Button title="Meat & Fish" />
          <Button title="Driead Foods" />
          <Button title="Bread & cakes" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between lg:my-4">
        {!isLoading &&
          productsData.products.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
      </div>
      <button className="mx-auto mt-4 flex rounded-md bg-green-500 px-3 py-2 text-sm text-white lg:px-8 lg:py-4 lg:text-xl">
        <Link to="/products">view all products</Link>
      </button>
    </section>
  );
};

export default OurProducts;
