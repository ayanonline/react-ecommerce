import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-green-100 py-10 text-center">
      <h1 className="text-5xl">Get The Newest Offers</h1>
      <p className="my-8 text-stone-500">
        and a coupon for 20% off your first purchase
      </p>
      <div className="mx-auto w-fit rounded-md border-2">
        <input
          type="text"
          placeholder="Enter your email address"
          className="rounded-l-md p-3 outline-none"
        />
        <button className="rounded-r-md bg-green-500 px-6 py-3 text-white">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
