import { BiHomeAlt2, BiGridAlt, BiUser, BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="fixed bottom-0 z-50 w-full border-t-2 bg-white py-2 lg:hidden">
      <div className="flex justify-around">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
          <div className="flex flex-col items-center text-xs">
            <BiHomeAlt2 className="h-6 w-6" />
            Home
          </div>
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
          <div className="flex flex-col items-center text-xs">
            <BiGridAlt className="h-6 w-6" />
            Products
          </div>
        </NavLink>

        <NavLink
          to="/profile/settings"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
          <div className="flex flex-col items-center text-xs">
            <BiUser className="h-6 w-6" />
            Account
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-black"
          }
        >
          <div className="relative flex flex-col items-center pr-2 text-xs">
            <BiCart className="h-6 w-6" />
            Cart
            {cart.length > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileMenu;
