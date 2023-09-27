import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../../store/slices/cartSlice";
import toast from "react-hot-toast";
import ProfileSettings from "./ProfileSettings";
import ChangePassword from "./ChangePassword";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(updateCart([]));
    navigate("/");
    toast.success("Successfully logout");
  };

  return (
    <div className="w-[40rem] px-5">
      <ProfileSettings />
      <ChangePassword />

      {/* logout */}
      <button
        className="bg-red-600 px-4 py-2 text-sm text-white lg:text-base"
        onClick={logoutHandler}
      >
        Log out
      </button>
    </div>
  );
};

export default Settings;
