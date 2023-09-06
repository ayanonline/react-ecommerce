import React from "react";

const CategoryCard = () => {
  return (
    <div className="m-4 flex h-[14rem] min-w-[15rem] flex-col items-center justify-center rounded-md bg-[#FFD7D4] py-4">
      <img src="/meats.png" alt="category-image" className="h-36" />
      <span className="text-lg text-gray-600">Meats</span>
    </div>
  );
};

export default CategoryCard;
