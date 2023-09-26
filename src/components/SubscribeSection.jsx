const SubscribeSection = () => {
  return (
    <section className="bg-green-100 py-4 text-center lg:py-10">
      <h1 className="text-lg lg:text-5xl">Get The Newest Offers</h1>
      <p className="my-2 text-xs text-stone-500 lg:my-8 lg:text-base">
        and a coupon for 20% off your first purchase
      </p>
      <div className="mx-auto w-fit rounded-md border-2">
        <input
          type="text"
          placeholder="Your email address"
          className="rounded-l-md px-2 py-1 outline-none lg:p-3"
        />
        <button className="rounded-r-md bg-green-500 px-2 py-1 text-white lg:px-6 lg:py-3">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
