import React from "react";

const ReviewCard = () => {
  return (
    <div className="relative mr-4 min-w-[39rem] rounded-md border p-4 shadow-xl">
      <div className="flex">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="user-image"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h1 className="text-3xl">username</h1>
          <p>*****</p>
        </div>
      </div>
      <p className="my-8 text-xl text-stone-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla
        dolorem ex praesentium ratione explicabo laudantium aut eius atque
        tempore esse molestiae, nostrum deleniti. Nisi dolores dolor culpa
        maxime minima.Nisi dolores dolor culpa maxime minima.Nisi dolores dolor
        culpa maxime minima.
      </p>
      <button className="absolute bottom-0 right-10 m-4 rounded-md bg-green-500 px-8 py-1 font-semibold text-white">
        Read
      </button>
    </div>
  );
};

export default ReviewCard;
