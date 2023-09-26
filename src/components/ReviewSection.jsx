import { useRef } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };
  return (
    <section className="relative mx-5 my-5 lg:mx-[20rem] lg:my-10">
      <h1 className="lg:text-5xl">What our customer say</h1>
      <button
        className="absolute -left-2 top-[50%] z-20 rounded-full border bg-white p-2 shadow-lg lg:-left-6 lg:p-4"
        onClick={slideLeft}
      >
        <HiOutlineArrowNarrowLeft className="h-3 w-3 text-green-400 lg:h-6 lg:w-6" />
      </button>
      <button
        className="absolute -right-2 top-[50%] z-20 rounded-full border bg-white p-2 shadow-lg lg:-right-6 lg:p-4"
        onClick={slideRight}
      >
        <HiOutlineArrowNarrowRight className="h-3 w-3 text-green-400 lg:h-6 lg:w-6" />
      </button>
      <div
        ref={sliderRef}
        className="mt-2 flex overflow-x-scroll scroll-smooth scrollbar-hide lg:mt-5"
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default ReviewSection;
