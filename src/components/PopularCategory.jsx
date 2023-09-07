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
      sliderRef.current.scrollLeft -= 400;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 400;
    }
  };

  return (
    <section className="mx-[20rem] my-10">
      <h1 className="mb-5 text-5xl">Popular Categoires</h1>

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
          <CategoryCard title="Meats" bg="bg-pink-200" img="/meats.png" />
          <CategoryCard
            title="Vegetables"
            bg="bg-sky-100"
            img="/vegetables.png"
          />
          <CategoryCard title="Fruits" bg="bg-amber-100" img="/fruits.png" />
          <CategoryCard title="Spices" bg="bg-orange-100" img="/spices.png" />
          <CategoryCard
            title="Dry Fruits"
            bg="bg-green-100"
            img="/dryfruits.png"
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
