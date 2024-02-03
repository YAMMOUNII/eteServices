import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/ProductSlice";
import StaticReducer from "./Slices/StaticSlices";

const store = configureStore({
  reducer: {
    product: productReducer,
    static: StaticReducer
  },
});

export default store;
