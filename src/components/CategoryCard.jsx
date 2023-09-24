const CategoryCard = ({ title, bg, img }) => {
  return (
    <div
      className={`mr-3 flex min-w-[7rem] flex-col items-center justify-between rounded-md lg:mr-8 lg:h-[16rem] lg:min-w-[18.5rem] ${bg} py-2 lg:py-4`}
    >
      <img src={img} alt="category-image" className="h-20 lg:h-40" />
      <span className="text-gray-600 lg:text-lg">{title}</span>
    </div>
  );
};

export default CategoryCard;
