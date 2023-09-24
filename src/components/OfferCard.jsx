const OfferCard = ({ img, price, title }) => {
  return (
    <div className="flex w-1/2 flex-col justify-between rounded-md bg-[#ffe9e8] p-2 lg:h-56 lg:w-full lg:flex-row lg:px-2 lg:py-6">
      <img src={img} alt="" className="h-[4rem] object-contain lg:h-[10rem]" />
      <div className="flex flex-col items-center justify-between lg:items-center">
        <h1 className="text-xs lg:text-4xl">{title}</h1>
        <div className="flex flex-col items-center justify-between">
          <span className="text-xs text-green-500 lg:text-base">
            From {price}
          </span>
          <button className="rounded-md bg-green-500 px-3 py-2 text-xs text-white lg:ml-4 lg:px-6 lg:text-base">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
