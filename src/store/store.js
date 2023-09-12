import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    filters: filterSlice,
  },
});

export default store;
