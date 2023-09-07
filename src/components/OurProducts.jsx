import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import { getAllproducts } from "../services/apiProducts";
import { Link } from "react-router-dom";

const Button = ({ title }) => {
  return (
    <button className="min-w-[10rem] rounded-md border border-green-500 bg-white px-6 py-4 text-center text-sm text-slate-500">
      {title}
    </button>
  );
};

const OurProducts = () => {
  const {
    isLoading,
    data: productsData,
    error,
  } = useQuery({ queryKey: ["products"], queryFn: () => getAllproducts(6) });

  if (error) return <h1>Something Went wrong</h1>;
  return (
    <section className="mx-[20rem] py-8">
      <h1 className="mb-5 text-5xl">Our Products</h1>
      <div className="relative">
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
      <div className="my-4 flex flex-wrap justify-between">
        {!isLoading &&
          productsData.products.map((item) => (
            <Link to={"/products/" + item._id} key={item._id}>
              <ProductCard product={item} />
            </Link>
          ))}
      </div>
      <button className="mx-auto flex rounded-md bg-green-500 px-8 py-4 text-xl text-white">
        <Link to="/products">view all products</Link>
      </button>
    </section>
  );
};

export default OurProducts;
