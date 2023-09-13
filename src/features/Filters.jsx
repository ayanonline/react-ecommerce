import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterCategory,
  clearFilters,
  filterRatins,
  filterMaxPrice,
} from "../store/slices/filterSlice";

const Filters = () => {
  const [price, setPrice] = useState(1000);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterCategory(category));
    dispatch(filterRatins(ratings));
    dispatch(filterMaxPrice(price));
  }, [category, price, ratings]);

  return (
    <section className="sticky top-40 mr-6 mt-4 h-[80vh] w-1/5 rounded-md border p-4 shadow-lg">
      <div className="mb-4 flex justify-between">
        <span className="text-2xl font-semibold">Filters</span>
        <span
          className="cursor-pointer text-xl text-blue-400"
          onClick={() => {
            dispatch(clearFilters());
            setCategory("");
            setRatings(0);
            setPrice(1000);
          }}
        >
          CLERAR FILTERS
        </span>
      </div>

      <div className="select-none">
        <h2 className="my-2 text-xl">Category</h2>
        <div className="flex items-center">
          <input
            id="fruit"
            className="mr-2 h-5 w-5 cursor-pointer"
            type="checkbox"
            value="fruit"
            name="category"
            checked={category === "fruit"}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="fruit" className="cursor-pointer text-xl">
            Fruit
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="juice"
            className="mr-2 h-5 w-5 cursor-pointer"
            type="checkbox"
            name="category"
            value="juice"
            checked={category === "juice"}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="juice" className="cursor-pointer text-xl">
            Juice
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="vegetable"
            className="mr-2 h-5 w-5 cursor-pointer"
            type="checkbox"
            name="category"
            value="vegetables"
            checked={category === "vegetables"}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="vegetable" className="cursor-pointer text-xl">
            Vegetable
          </label>
        </div>
      </div>
      <div className="my-3">
        <span className="text-xl">Max price: {price}</span>
        <input
          type="range"
          name="price"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full "
        />
      </div>
      <div>
        <span className="text-xl">Customer's ratings</span>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="1"
            name="ratings"
            value={4}
            checked={ratings == 4}
            onChange={(e) => setRatings(e.target.value)}
            className="mr-2 h-5 w-5 cursor-pointer"
          />
          <label htmlFor="1" className="cursor-pointer text-xl">
            4* & above
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="2"
            name="ratings"
            value={3}
            checked={ratings == 3}
            onChange={(e) => setRatings(e.target.value)}
            className="mr-2 h-5 w-5 cursor-pointer"
          />
          <label htmlFor="2" className="cursor-pointer text-xl">
            3* & above
          </label>
        </div>
      </div>
    </section>
  );
};

export default Filters;
