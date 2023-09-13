import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { authorizeUser } from "../store/actions/authorizeUser";

const AppLayout = () => {
  const [token] = useState(Cookies.get("token"));

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authorizeUser());
    }
  }, [token]);
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
