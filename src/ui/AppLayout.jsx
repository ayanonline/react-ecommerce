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
import axios from "axios";

const AppLayout = () => {
  const [token] = useState(Cookies.get("token"));
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authorizeUser());
    }
  }, [token]);

  useEffect(() => {
    const instance = axios.create({
      withCredentials: true,
    });
    if (isAuthenticated) {
      async function fetchCart() {
        try {
          const res = await instance.get("http://localhost:4000/api/v1/cart/");
          dispatch(updateCart(res.data.cart.items));
        } catch (error) {
          console.log(error);
        }
      }
      fetchCart();
    }
  }, [isAuthenticated]);

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
