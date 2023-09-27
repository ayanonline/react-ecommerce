import { SlBasketLoaded } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../features/search/Search";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="flex select-none items-center justify-between px-2 py-2 lg:px-[20rem] lg:py-4">
        <div>
          <Link to="/" className="font-bold text-green-500 lg:text-4xl">
            Fresh Grocery
          </Link>
        </div>

        <Search />

        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex gap-5">
            <li>
              <NavLink to="/" className="text-gray-400 lg:text-xl">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="text-gray-400 lg:text-xl">
                All products
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <div className="relative cursor-pointer pr-4">
              <SlBasketLoaded className="h-10 w-10" />
              {cart.length > 0 && (
                <span className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-sm font-bold text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
          {isAuthenticated ? (
            <Link to="profile/settings">
              <img
                src={user.avatar}
                alt="user-icon"
                className="h-10 w-10 rounded-full object-contain"
              />
            </Link>
          ) : (
            <button className="rounded-md border bg-green-500 px-8 py-1 font-semibold text-white lg:text-xl">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
