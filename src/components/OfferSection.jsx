import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <section className="mx-5 flex flex-col gap-2 lg:mx-[20rem] lg:flex-row lg:gap-8">
      <div className="relative h-[15rem] rounded-md bg-[#f0ffdf] lg:h-[30rem] lg:w-1/2">
        <span className="absolute right-6 bg-[#ffdb8e] px-4 py-10 text-base  leading-normal lg:right-10 lg:px-4 lg:py-8 lg:text-5xl">
          Sale <br />
          30% <br /> off
        </span>
        <p className="p-2 text-2xl font-thin leading-normal lg:p-5 lg:text-[3rem]">
          <span>Farm</span> <span className="text-green-500">Fresh</span>
          <br /> Vegetable
        </p>
        <img
          src="/vegetables2.png"
          alt="offer image"
          className="absolute bottom-0 h-[12rem] rounded-bl-md lg:h-[24rem]"
        />
      </div>
      <div className="flex justify-between gap-2 lg:w-1/2 lg:flex-col">
        <OfferCard
          img="/meats2.png"
          title="Upto 13% off Fresh Meat"
          price="$139.9"
        />
        <OfferCard
          img="/fruitsdrink.png"
          title="Upto 15% off Fresh Fruit Drink"
          price="$32.9"
        />
      </div>
    </section>
  );
};

export default OfferSection;
