import { useRef } from "react";
import CategoryCard from "./CategoryCard";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const PopularCategory = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 200;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 200;
    }
  };

  return (
    <section className="mx-[20rem] my-10">
      <h1 className="text-3xl">Popular Categoires</h1>

      <div className="relative">
        <button
          className="absolute -left-6 top-[40%] rounded-full bg-white p-4 shadow-lg"
          onClick={slideLeft}
        >
          <HiOutlineArrowNarrowLeft className="h-6 w-6 text-green-400" />
        </button>
        <button
          className="absolute -right-6 top-[40%] rounded-full bg-white p-4 shadow-lg"
          onClick={slideRight}
        >
          <HiOutlineArrowNarrowRight className="h-6 w-6 text-green-400" />
        </button>

        <div ref={sliderRef} className="flex overflow-x-scroll scroll-smooth">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
