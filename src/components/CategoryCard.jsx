import React from "react";

const CategoryCard = ({ title, bg, img }) => {
  return (
    <div
      className={`mr-8 flex h-[16rem] min-w-[18.5rem] flex-col items-center justify-between rounded-md ${bg} py-4`}
    >
      <img src={img} alt="category-image" className="h-40" />
      <span className="text-lg text-gray-600">{title}</span>
    </div>
  );
};

export default CategoryCard;
