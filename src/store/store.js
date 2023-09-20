import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    filters: filterSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
