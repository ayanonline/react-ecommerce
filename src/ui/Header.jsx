import { SlBasketLoaded } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import Search from "../features/Search";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

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
              <NavLink to="/products" className="text-gray-400">
                All products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-400">
                About
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart">
            <div className="relative cursor-pointer pr-4">
              <SlBasketLoaded className="h-8 w-8" />
              {cart.length > 0 && (
                <span className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-400 text-sm font-bold text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
          {isAuthenticated ? (
            <Link to="profile">
              <img
                src={user.avatar}
                alt="user-icon"
                className="h-10 w-10 rounded-full object-contain"
              />
            </Link>
          ) : (
            <button className="rounded-md border bg-green-500 px-8 py-1 text-xl font-semibold text-white">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
