import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import useProducts from "../../hooks/useProducts";

const ProductsContainer = () => {
  const [page, setpage] = useState(1);
  const { category, ratings, maxPrice } = useSelector((state) => state.filters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const { isLoading, productsData, error } = useProducts(
    9,
    page,
    category,
    ratings,
    maxPrice,
  );

  // early returning
  if (isLoading) return <h1>loading</h1>;

  // calculating total page count
  let totalPage;
  if (productsData.total > productsData.limit) {
    if (productsData.total % productsData.limit === 0) {
      totalPage = Math.round(productsData.total / productsData.limit);
    } else {
      totalPage = Math.round(productsData.total / productsData.limit) + 1;
    }
  } else {
    totalPage = 1;
  }

  return (
    <section className="relative pb-4">
      <p className="absolute right-28 text-2xl font-bold tracking-[0.4rem] text-green-500">
        {page}/{totalPage}
      </p>
      <div className="my-8 flex w-[75vw] flex-wrap justify-center gap-5">
        {productsData.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {totalPage > 1 && (
        <div className="text-center">
          <button
            className="border px-8 py-2"
            onClick={() => {
              if (page > 1) setpage(page - 1);
            }}
          >
            Prev
          </button>
          <button
            className="border px-8 py-2"
            onClick={() => {
              if (page < totalPage) setpage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsContainer;
