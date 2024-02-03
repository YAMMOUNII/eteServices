import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import { config } from "./../../utils/Constants";
const URL = config.url;

const initialState = {
  isloading: "idle",
  gettingProductData: [],
};

export const fetchAllProduct = createAsyncThunk(
  "getAllProduct",
  async () => {
    const res = await axios.get(
      `${URL}/product/list`
    );
    return res.data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state) => {
      if (state.isloading === "idle") {
        state.isloading = "pending";
      }
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      // console.log(action);
      if (state.isloading === "pending") {
        state.isloading = "idle";
        state.gettingProductData = [...action.payload.products];
      }
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      if (state.isloading === "pending") {
        state.isloading = "idle";
        state.gettingProductData = [];
      }
    });
  },
});

export const { settingProductData, restProductData } = ProductSlice.actions;

export default ProductSlice.reducer;
