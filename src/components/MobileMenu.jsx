import { BiHomeAlt2, BiGridAlt, BiUser, BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <nav className="fixed bottom-0 w-full border-t-2 bg-white py-2 lg:hidden">
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
          to="/profile"
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
          <div className="flex flex-col items-center text-xs">
            <BiCart className="h-6 w-6" />
            Cart
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileMenu;
