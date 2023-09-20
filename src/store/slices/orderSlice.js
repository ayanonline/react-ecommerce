import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: {
    createOrder: (state, action) => {
      return action.payload;
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
