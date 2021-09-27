import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  products: any;
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.products = [...state.products, action.payload];
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
