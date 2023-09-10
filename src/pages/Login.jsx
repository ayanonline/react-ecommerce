import Cookies from "js-cookie";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const passRef = useRef(null);

  const navigate = useNavigate();

  const token = Cookies.get("token");
  console.log(token);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    Cookies.set("token", data.token);
    navigate("/");
  };

  return (
    <div className="flex h-[92vh]  select-none items-start bg-gray-100 px-[20rem] py-20">
      <section className="min-w-[50%] p-20">
        <h1 className="text-5xl">Welcome back </h1>
        <h2 className="mt-4 text-2xl">Good to see you again</h2>
        <img src="/cart.png" alt="an image" className="-mt-8 h-[24rem]" />
      </section>

      <section className="min-w-[50%] p-20">
        <h1 className="mb-16 text-5xl font-bold text-green-500">Sign In</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="rounded-md bg-green-500 p-3 text-2xl font-bold text-white"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 cursor-pointer text-lg text-gray-400 hover:underline">
          Don't have an account?
          <span className="pl-2 font-bold text-green-500">Sigin up</span>
        </p>
      </section>
    </div>
  );
};

export default Login;
