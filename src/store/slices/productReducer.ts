import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Product, ProductState } from "./../../shared/types";

//
let valueProductsFromLocalStorage: any  = localStorage.getItem("products");
let productsArray: any = localStorage.getItem("products")
  ? JSON.parse(valueProductsFromLocalStorage)
  : [];

// get all products
export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async function (_, thunkAPI) {
    try {
      thunkAPI.dispatch(addProducts(productsArray));

      return productsArray;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get one product
export const fetchProduct: any = createAsyncThunk(
  "products/fetchProduct",
  async function (arg: Product, thunkAPI) {
    try {
      const responce = { ...arg, id: Date.now() };

      productsArray.push(responce);

      localStorage.setItem("products", JSON.stringify(productsArray));

      thunkAPI.dispatch(addProduct(responce));

      return responce;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const setError = (state: ProductState, action: PayloadAction<Product[]>) => {
  state.status = "reject";
  state.error = action.payload;
};

export const productAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});
const initialState = productAdapter.getInitialState();

export const productSelectors = productAdapter.getSelectors();

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      productAdapter.addOne(state, action.payload);
    },
    addProducts: (state, action: PayloadAction<Product[]>) => {
      productAdapter.addMany(state, action.payload);
    },
  },
  extraReducers: {
    // add products
    [fetchProducts.pending]: (state: ProductState) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state: ProductState) => {
      state.status = "resolved";
    },
    [fetchProducts.rejected]: setError,

    // add product
    [fetchProduct.pending]: (state: ProductState) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProduct.fulfilled]: (state: ProductState) => {
      state.status = "resolved";
    },
    [fetchProduct.rejected]: setError,
  },
});

export const { addProduct, addProducts } = productSlice.actions;

export default productSlice.reducer;
