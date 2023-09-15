import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex items-stretch justify-between bg-[#D9F5DA] px-[20rem]">
      <div className="flex flex-col items-start gap-5 py-4">
        <h1 className="font-bold text-[#72C787]">100% organic</h1>
        <p className="text-5xl font-semibold capitalize leading-tight">
          enjoy healthy & tasty <br /> food with
          <span className="text-[#35AE56]"> fresh grocery</span> <br />
          shop
        </p>
        <p className="text-gray-400">
          Maga ullamcorper commodo hac eu scelerisque. Sit varius <br />
          dictum ac ornare ullamcorper nisi
        </p>
        <Link to="/products">
          <button className="rounded-md bg-green-500 px-10 py-4 text-lg font-semibold text-white">
            Shop Now
          </button>
        </Link>
      </div>
      <img src="/banner.png" alt="banner img" />
    </section>
  );
};

export default Banner;
