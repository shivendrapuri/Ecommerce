import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "productsData",
  initialState: {
    value: []

    
  },
  reducers: {
    addProductData: (state, action) => {
      var data = action.payload;
      if (!data.qty) {
        data.qty = 1;
      }
      state.value = [...state.value, data];
    },
    incrementQty: (state, action) => {
      var id = action.payload;
      state.value = state.value.map(product => product.id === id ? { ...product, qty: product.qty + 1 } : product);
    },
    decrementQty: (state, action) => {
      var id = action.payload;
      state.value = state.value.map(product => product.id === id && product.qty > 1 ? { ...product, qty: product.qty - 1 } : product);
    },
    removeItem: (state, action) => {
      var id = action.payload;
      state.value = state.value.filter(product => product.id !== id);
    }
  }
});

export default Slice.reducer;
export const { addProductData, incrementQty, decrementQty, removeItem } = Slice.actions;
