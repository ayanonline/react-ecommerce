const ReviewCard = () => {
  return (
    <div className="relative mr-4 min-w-[19rem] rounded-md border px-4 pb-10 shadow-xl lg:min-w-[39rem]">
      <div className="flex items-center">
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="user-image"
          className="h-8 w-8 rounded-full object-cover lg:h-16 lg:w-16"
        />
        <div className="ml-4">
          <h1 className="lg:text-3xl">username</h1>
          <p>*****</p>
        </div>
      </div>
      <p className="text-sm text-stone-400 lg:my-8 lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla
        dolorem ex praesentium ratione explicabo laudantium aut eius atque
        tempore esse molestiae, nostrum deleniti. Nisi dolores dolor culpa
        maxime minima.Nisi dolores dolor culpa maxime minima.Nisi dolores dolor
        culpa maxime minima.
      </p>
      <button className="absolute bottom-3 right-10 rounded-md bg-green-500 px-8 py-1 font-semibold text-white">
        Read
      </button>
    </div>
  );
};

export default ReviewCard;
