import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdModeEditOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../services/user";
import toast from "react-hot-toast";
import { updateUser } from "../store/slices/userSlice";

const ProfileSettings = () => {
  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profilePhoto, setProfilePhoto] = useState(user.avatar);
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const formData = new FormData();
  if (image) {
    const reader = new FileReader();
    reader.onload = (e) => setProfilePhoto(e.target.result);
    reader.readAsDataURL(image);
  }

  const { isLoading, mutate } = useMutation({
    mutationFn: () => updateUserProfile(formData),
    onSuccess: (data) => {
      dispatch(updateUser(data.user));
      toast.success("Profile updated successfully");
    },
    onError: (error) => {
      toast.error("Failed to update profile\n" + error.message);
    },
  });

  const clickHandler = () => {
    if (image) formData.append("avatar", image);
    formData.append("email", email);
    formData.append("name", name);
    mutate();
  };

  return (
    <section className="relative flex flex-col">
      <h1 className="my-4 text-3xl font-bold text-green-400">
        YOUR ACCOUNT SETTINGS
      </h1>

      <div className="relative mb-2 w-fit rounded-full border-2">
        <img
          src={profilePhoto}
          alt=""
          className="h-40 w-40 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-2 cursor-pointer rounded-full bg-gray-300 p-2">
          <MdModeEditOutline className=" text-2xl" />
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setImage(e.target.files[0])}
            className="absolute left-0 top-0 h-10 w-10 cursor-pointer rounded-full py-2 opacity-0 file:cursor-pointer"
          />
        </div>
      </div>

      <label htmlFor="name" className="mb-1 text-lg">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 rounded-md bg-gray-100 p-3 outline-none"
      />

      <label htmlFor="email" className="mb-1 text-lg">
        Email address
      </label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-20 rounded-md bg-gray-100 p-3 outline-none"
      />

      <button
        disabled={isLoading}
        className="absolute bottom-0 right-0 mb-4 w-fit bg-green-500 p-2 text-white"
        onClick={clickHandler}
      >
        {isLoading ? "Updating profile..." : "SAVE SETTINGS"}
      </button>
    </section>
  );
};

export default ProfileSettings;
