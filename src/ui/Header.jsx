import { SlMagnifier, SlBasketLoaded } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import Search from "../features/Search";
import Cookies from "js-cookie";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex select-none items-center justify-between px-[20rem] py-4">
        <div>
          <Link to="/" className="text-4xl font-bold text-green-500">
            Fresh Grocery
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Search />
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
            <Link to="/login">Login</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
