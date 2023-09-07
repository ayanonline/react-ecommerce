import React, { useRef } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ProductGallery = ({ images }) => {
  const targetImage = useRef(null);
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

  console.log(images);
  return (
    <div className="min-w-[30vw] max-w-[30vw] border-2">
      <img
        ref={targetImage}
        src={images[0].url + images[0].public_id}
        alt="product image"
        className="max-h-[30rem] min-h-[30rem] min-w-[100%] max-w-[100%] object-contain p-2"
      />
      <div className="relative border-t-2 p-2">
        <button
          className="absolute left-0 top-0 bg-gradient-to-r from-white via-white to-transparent py-9"
          onClick={slideLeft}
        >
          <SlArrowLeft className="text-2xl" />
        </button>

        <button
          className="absolute right-0 top-0 bg-gradient-to-l from-white via-white to-transparent py-9"
          onClick={slideRight}
        >
          <SlArrowRight className="text-2xl" />
        </button>

        <div
          ref={sliderRef}
          className="flex justify-center gap-5 overflow-x-scroll scroll-smooth pl-10"
        >
          {images.map((img) => (
            <img
              src={img.url + img.public_id}
              alt=""
              className="h-20 min-w-[5rem] cursor-pointer"
              onMouseOver={(e) => (targetImage.current.src = e.target.src)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
