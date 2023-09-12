import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    filterRatins: (state, action) => {
      state.ratings = action.payload;
    },
    filterMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    filterCategory: (state, action) => {
      state.category = action.payload;
    },
    clearFilters: (state) => {
      return {};
    },
  },
});

export const {
  filterMaxPrice,
  filterMinPrice,
  filterRatins,
  filterCategory,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
