const OfferCard = ({ img, price, title }) => {
  return (
    <div className="flex h-56 rounded-md bg-[#ffe9e8] px-2 py-6">
      <img src={img} alt="" className="h-[10rem] object-contain" />
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-4xl">{title}</h1>
        <div>
          <span className="text-green-500">From {price}</span>
          <button className="ml-4 rounded-md bg-green-500 px-6 py-2 text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
