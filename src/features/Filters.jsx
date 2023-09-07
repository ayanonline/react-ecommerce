import React, { useEffect, useState } from "react";

const Filters = () => {
  const [price, setPrice] = useState(5000);
  const [category, setCategory] = useState([]);
  const [ratings, setRatings] = useState(null);

  useEffect(() => {
    filter();
  }, [category, price, ratings]);

  // checkbox handler
  const checkBoxHandler = (e) => {};

  // filter function
  const filter = () => {};
  // price handler
  const handleSlider = (e) => {
    setPrice(e.target.value);
  };

  //ratings handler
  const ratingsHandler = (e) => {
    if (ratings == e.target.value) {
      setRatings(null);
    } else {
      setRatings(e.target.value);
    }
  };

  return (
    <section className="sticky top-40 mr-6 h-[80vh] w-1/5 rounded-md border p-4 shadow-lg">
      <div className="mb-4 flex justify-between">
        <span className="text-xl font-semibold">Filters</span>
        <span className="cursor-pointer text-blue-400" onClick={() => {}}>
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
            id="fruits"
            onChange={checkBoxHandler}
          />
          <label for="fruits">Fruits</label>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            name="category"
            value="juice"
            id="juice"
            onChange={checkBoxHandler}
          />
          <label for="juice">Juice</label>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            name="category"
            value="vegetable"
            id="vegetable"
            onChange={checkBoxHandler}
          />
          <label for="vegetable">Vegetable</label>
        </div>
      </div>
      <div className="my-4">
        <span className="text-xl">Max price: {price}</span>
        <div>
          <input
            type="range"
            name="price"
            min={0}
            max={5000}
            value={price}
            onChange={handleSlider}
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
            onChange={ratingsHandler}
            className="mr-2"
          />
          <label for="1">4* & above</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="2"
            name="ratings"
            value={3}
            checked={ratings == 3}
            onChange={ratingsHandler}
            className="mr-2"
          />
          <label for="2">3* & above</label>
        </div>
      </div>
    </section>
  );
};

export default Filters;
