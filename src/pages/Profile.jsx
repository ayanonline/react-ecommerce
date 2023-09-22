import { useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../store/slices/cartSlice";
import toast from "react-hot-toast";
import ProfileSettings from "../features/profile/ProfileSettings";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(updateCart([]));
    navigate("/");
    toast.success("Successfully logout");
  };

  return (
    <div className="mx-auto w-[40rem] py-5">
      <ProfileSettings />

      <section className="relative flex flex-col">
        <h1 className="mb-4 text-2xl font-bold text-green-400">
          PASSWORD CHANGE
        </h1>
        <label htmlFor="currentpass" className="mb-1 text-lg">
          Current password
        </label>
        <input
          id="currentpass"
          type="password"
          placeholder="*********"
          className="mb-4 rounded-md bg-gray-100 p-3 outline-none"
        />
        <label htmlFor="newpass" className="mb-1 text-lg">
          New password
        </label>
        <input
          id="newpass"
          type="password"
          placeholder="*********"
          className="mb-4 rounded-md bg-gray-100 p-3 outline-none"
        />
        <label htmlFor="confirmpass" className="mb-1 text-lg">
          Confirm password
        </label>
        <input
          id="confirmpass"
          type="password"
          placeholder="*********"
          className="mb-20 rounded-md bg-gray-100 p-3 outline-none"
        />
        <button className="absolute bottom-0 right-0 mb-4 w-fit bg-green-500 p-2 text-white">
          CHANGE PASSWORD
        </button>
      </section>
      {/* logout */}
      <button
        className="bg-red-600 px-4 py-2 text-white"
        onClick={logoutHandler}
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
