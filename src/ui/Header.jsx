import { SlMagnifier, SlBasketLoaded } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex select-none items-center justify-between px-[20rem] py-4">
        <div>Fresh Grocery</div>
        <div className="flex items-center gap-5">
          <div className="flex  items-center rounded-md border-2 px-2 py-1">
            <SlMagnifier />
            <input
              type="text"
              className="ml-2 outline-none"
              placeholder="Search"
            />
          </div>
          <ul className="flex gap-5">
            <li>
              <NavLink to="/" className="text-gray-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-400">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="text-gray-400">
                All products
              </NavLink>
            </li>
          </ul>
          <div className="cursor-pointer">
            <NavLink to="/cart">
              <SlBasketLoaded className="h-8 w-8" />
            </NavLink>
          </div>
          <button className="rounded-md border bg-green-500 px-8 py-1 text-xl font-semibold text-white">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
