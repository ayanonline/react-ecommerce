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
        <span className="text-xl font-semibold">Filters</span>
        <span
          className="cursor-pointer text-blue-400"
          onClick={() => {
            dispatch(clearFilters());
            setCategory("");
            setRatings(0);
          }}
        >
          CLERAR FILTERS
        </span>
      </div>

      <div className="select-none">
        <span className="text-xl">Category</span>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            value="fruits"
            name="category"
            checked={category === "fruits"}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="fruits">Fruits</label>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            name="category"
            value="juice"
            checked={category === "juice"}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="juice">Juice</label>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            name="category"
            value="vegetables"
            checked={category === "vegetables"}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <label htmlFor="vegetable">Vegetable</label>
        </div>
      </div>
      <div className="my-4">
        <span className="text-xl">Max price: {price}</span>
        <div>
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
      </div>
      <div>
        <span className="text-xl">Customer's ratings</span>
        <div>
          <input
            type="checkbox"
            id="1"
            name="ratings"
            value={4}
            checked={ratings == 4}
            onChange={(e) => setRatings(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="1">4* & above</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="2"
            name="ratings"
            value={3}
            checked={ratings == 3}
            onChange={(e) => setRatings(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="2">3* & above</label>
        </div>
      </div>
    </section>
  );
};

export default Filters;
