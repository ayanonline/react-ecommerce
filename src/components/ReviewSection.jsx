import { useRef } from "react";
import ReviewCard from "./ReviewCard";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const ReviewSection = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 650;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 650;
    }
  };
  return (
    <section className="relative mx-[20rem] my-10">
      <h1 className="text-5xl">What our customer say</h1>
      <button
        className="absolute -left-6 top-[50%] z-20 rounded-full bg-white p-4 shadow-lg"
        onClick={slideLeft}
      >
        <HiOutlineArrowNarrowLeft className="h-6 w-6 text-green-400" />
      </button>
      <button
        className="absolute -right-6 top-[50%] z-20 rounded-full bg-white p-4 shadow-lg"
        onClick={slideRight}
      >
        <HiOutlineArrowNarrowRight className="h-6 w-6 text-green-400" />
      </button>
      <div
        ref={sliderRef}
        className="scrollbar-hide mt-5 flex overflow-x-scroll scroll-smooth"
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default ReviewSection;
