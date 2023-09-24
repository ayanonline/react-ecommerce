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
    <section className="mx-5 my-2 lg:mx-[20rem] lg:my-10">
      <h1 className="mb-2 lg:mb-5 lg:text-5xl">Popular Categoires</h1>

      <div className="relative">
        <button
          className="absolute -left-2 top-[40%] rounded-full bg-white p-2 shadow-lg lg:-left-6 lg:p-4"
          onClick={slideLeft}
        >
          <HiOutlineArrowNarrowLeft className="h-3 w-3 text-green-400 lg:h-6 lg:w-6" />
        </button>
        <button
          className="absolute -right-2 top-[40%] rounded-full bg-white p-2 shadow-lg lg:-right-6 lg:p-4"
          onClick={slideRight}
        >
          <HiOutlineArrowNarrowRight className="h-3 w-3 text-green-400 lg:h-6 lg:w-6" />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
        >
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
