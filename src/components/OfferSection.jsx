import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <section className="mx-[20rem] flex gap-8">
      <div className="relative h-[30rem] w-1/2 rounded-md bg-[#f0ffdf]">
        <span className="absolute right-10  bg-[#ffdb8e] px-4 py-8 text-5xl leading-normal">
          Sale <br />
          30% <br /> off
        </span>
        <p className="p-5 text-[3rem] font-thin">
          <span>Farm</span> <span className="text-green-500">Fresh</span>
          <br /> Vegetable
        </p>
        <img
          src="/vegetables2.png"
          alt="offer image"
          className="absolute bottom-0 h-[24rem] rounded-bl-md"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-between">
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
