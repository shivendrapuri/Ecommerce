import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slice';

const Store = configureStore({
  reducer: {
    productDetails: productSlice
  }
});

export default Store;