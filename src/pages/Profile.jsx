import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex min-h-screen pb-16 lg:mx-[20rem]">
      <div className="flex flex-col bg-green-600 py-4 text-sm text-white lg:w-36">
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "bg-green-500" : "")}
        >
          <div className="px-2 py-4 text-center text-sm font-bold tracking-wider lg:text-lg">
            Settings
          </div>
        </NavLink>
        <NavLink
          to="orders"
          className={({ isActive }) => (isActive ? "bg-green-500" : "")}
        >
          <div className="px-2 py-4 text-center text-sm font-bold tracking-wider lg:text-lg">
            Orders
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
