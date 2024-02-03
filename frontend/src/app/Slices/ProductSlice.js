import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: "idle",
  gettingProductData: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    settingProductData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    restProductData: (state) => {
      state.isloading = "idle";
      state.gettingProductData = [];
    },
  },
});

export const { settingProductData, restProductData } = ProductSlice.actions;

export default ProductSlice.reducer;
