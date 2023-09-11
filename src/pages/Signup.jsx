import React, { useState, useRef, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../store/actions/signup";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [avatar, setAvatar] = useState();
  const passRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, isAuthenticated, error } = useSelector(
    (state) => state.user,
  );

  if (error) toast.error(error);

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("avatar", avatar);
    dispatch(signup(formData));
  };

  return (
    <div className="flex h-[92vh]  select-none items-start bg-gray-100 px-[20rem] py-10">
      <section className="min-w-[50%] p-20">
        <h1 className="text-5xl">
          Welcome To <span className="text-green-500">Fresh Grocery</span>
        </h1>

        <img src="/cart.png" alt="an image" className="-mt-8 h-[24rem]" />
      </section>

      <section className="min-w-[50%] p-20">
        <h1 className="mb-16 text-5xl font-bold text-green-500">Sign Up</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="mb-6 rounded-md border-2 p-4 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-6 rounded-md border-2 p-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative mb-6 rounded-md border-2">
            <input
              ref={passRef}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" w-full rounded-md p-4 outline-none"
            />
            <div
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => {
                passRef.current.type === "text"
                  ? (passRef.current.type = "password")
                  : (passRef.current.type = "text");
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <AiOutlineEye className="h-6 w-6 text-green-500" />
              ) : (
                <AiOutlineEyeInvisible className="h-6 w-6 text-green-500" />
              )}
            </div>
          </div>
          {/* <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            className="mb-6 cursor-pointer rounded-md border-2 outline-none file:mr-6 file:cursor-pointer file:rounded-md file:border-0 file:bg-green-500 file:p-3 file:px-6
             file:text-white"
          /> */}
          <button
            type="submit"
            className="rounded-md bg-green-500 p-3 text-2xl font-bold text-white disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <p className="mt-4 cursor-pointer text-lg text-gray-400 hover:underline">
          <Link to="/login">
            Already have an account?
            <span className="pl-2 font-bold text-green-500">Sigin in</span>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Signup;
