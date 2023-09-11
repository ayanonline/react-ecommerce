import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="mx-[20rem] py-10 ">
      <h1 className="text-3xl capitalize">{user.name}</h1>
      <p>Email: {user.email}</p>
      <button
        className="bg-green-500 px-4 text-white"
        onClick={() => {
          dispatch(logout());
          navigate("/");
          toast.success("Successfully logout");
        }}
      >
        Log out
      </button>
    </section>
  );
};

export default Profile;
