import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchText.length > 0 && getSearchSuggestion();
      searchText.length > 0
        ? setShowSuggestion(true)
        : setShowSuggestion(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  const getSearchSuggestion = async () => {
    const res = await fetch(
      "http://localhost:4000/api/v1/products?keyword=" + searchText,
    );
    const json = await res.json();
    setSuggestions(json.products);
  };

  return (
    <div className="relative">
      <div className="flex w-[47vw] items-center rounded-md border p-2 md:w-[25vw]">
        <CiSearch className="h-6 w-6" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => searchText.length > 0 && setShowSuggestion(true)}
        />
        <IoMdClose
          className={searchText.length > 0 ? "block cursor-pointer" : "hidden"}
          onClick={() => setSearchText("")}
        />
      </div>

      {/* suggesiton box */}
      {suggestions && showSuggestion && (
        <div
          className="absolute max-h-[40vh] w-full overflow-y-scroll rounded-md border bg-white"
          onClick={() => setShowSuggestion(false)}
        >
          <div className="felx flex-col">
            {suggestions.map((item) => (
              <div
                key={item._id}
                className="my-2 flex items-center justify-between p-4"
              >
                <Link to={"/products/" + item._id}>
                  <div className="flex items-center">
                    <img
                      src={item.thumbnail}
                      alt="pimage"
                      className="h-8 w-8 rounded-md object-cover md:h-14 md:w-14"
                    />
                    <span className="ml-2 text-xs font-semibold md:ml-6 md:text-lg">
                      {item.name}
                    </span>
                  </div>
                </Link>

                <span className="text-sm font-bold md:text-lg">
                  ${item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
