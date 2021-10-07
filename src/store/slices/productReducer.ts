import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async function (_, thunkAPI) {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=10`);

      if (!response.ok) {
        throw new Error("Error :( ");
      }

      const { results } = await response.json();

      return results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const setError = (state: any, action: any) => {
  state.status = "reject";
  state.error = action.payload;
};

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
  extraReducers: {
    [fetchProducts.pending]: (state: any) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state: any, action: any) => {
      state.status = "resolved";
      state.products = action.payload;
    },
    [fetchProducts.rejected]: setError,
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;
