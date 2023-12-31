import { useState, useRef, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/actions/login";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const passRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, error } = useSelector(
    (state) => state.user,
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isAuthenticated) {
      toast.success("Successfully logged in");
      navigate("/");
    }
  }, [isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="flex min-h-screen  select-none items-start bg-gray-100 lg:px-[20rem] ">
      <section className="hidden min-w-[50%] p-20 lg:block">
        <h1 className="text-5xl">Welcome back </h1>
        <h2 className="mt-4 text-2xl">Good to see you again</h2>
        <img src="/cart.png" alt="an image" className="-mt-8 h-[24rem]" />
      </section>

      <section className="w-full px-5 py-20 lg:min-w-[50%] lg:p-20">
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
            className="rounded-md bg-green-500 p-3 text-2xl font-bold text-white disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-4 cursor-pointer text-lg text-gray-400 hover:underline">
          <Link to="/signup">
            Don't have an account?
            <span className="pl-2 font-bold text-green-500">Sigin up</span>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
