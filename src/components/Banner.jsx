import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex items-stretch justify-between bg-green-100 px-5 lg:px-[20rem]">
      <div className="flex flex-col items-start gap-2 py-4 lg:gap-5">
        <h1 className="text-xs font-bold text-green-500">100% organic</h1>
        <p className="font-semibold capitalize leading-tight lg:text-5xl">
          enjoy healthy & tasty <br /> food with
          <span className="text-green-500"> fresh grocery</span> <br />
          shop
        </p>
        <p className="hidden text-xs text-gray-400 lg:block lg:text-base">
          Maga ullamcorper commodo hac eu scelerisque. Sit varius <br />
          dictum ac ornare ullamcorper nisi
        </p>
        <Link to="/products">
          <button className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white lg:px-10 lg:py-4 lg:text-lg">
            Shop Now
          </button>
        </Link>
      </div>

      <img
        src="/banner.png"
        alt="banner img"
        className="h-[10rem] w-[10rem] object-cover lg:m-0 lg:h-auto lg:w-auto"
      />
    </section>
  );
};

export default Banner;
