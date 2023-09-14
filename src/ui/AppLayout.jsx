import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { authorizeUser } from "../store/actions/authorizeUser";
import { useQuery } from "@tanstack/react-query";
import { getAllCart } from "../services/apiCart";
import { updateCart } from "../store/slices/cartSlice";

const AppLayout = () => {
  const [token] = useState(Cookies.get("token"));
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authorizeUser());
    }
  }, [token]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: getAllCart,
  });

  useEffect(() => {
    if (isAuthenticated) {
      !isLoading && !error && dispatch(updateCart(data.cart.items));
    }
  }, [isLoading, error, data]);

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
