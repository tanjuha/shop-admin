import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Product, ProductState, RootState } from "./../../shared/types";

// get and push values to the localStorage
let valueProductsFromLocalStorage: any = localStorage.getItem("products");
let productsArray: any = localStorage.getItem("products")
  ? JSON.parse(valueProductsFromLocalStorage)
  : [];

// get all products
export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async function (_, { dispatch, rejectWithValue, getState }) {
    try {

      // productsArray gets from localStorage
      const data = dispatch(addProducts(productsArray));

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

// get one product
export const fetchProduct: any = createAsyncThunk(
  "products/fetchProduct",
  async function (arg: Product, { dispatch, rejectWithValue }) {
    try {
      const responce = { ...arg, id: Date.now() };

      productsArray.push(responce);

      localStorage.setItem("products", JSON.stringify(productsArray));

      dispatch(addProduct(responce));

      return responce;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

// get product details
export const fetchProductDetails: any = createAsyncThunk(
  "products/fetchProductDetails",
  async function (arg: any, { dispatch, rejectWithValue }) {
    try {
      const data: any = await productsArray.find(
        (value: Product) => value.id === +arg
      );

      dispatch(addProductDeteails(data));

      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const removeNotification: any = createAsyncThunk(
  "products/removeNotification",
  async function (_, { rejectWithValue }) {
    try {

      console.log("some logic to remove notification");
      
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

const setError = (state: ProductState, action: PayloadAction<Product[]>) => {
  state.status = "reject";
  state.error = action.payload;
};

const setNotification = (message: any, type: any, isShow: any) => {
  let notification: any = {
    message,
    type,
    isShow,
  };

  return notification;
};

export const productAdapter = createEntityAdapter<Product>({
  selectId: (product) => product.id,
});
const initialState = productAdapter.getInitialState();

export const productSelectors = productAdapter.getSelectors<RootState>(
  (state) => state.products
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: productAdapter.addMany,
    addProduct: productAdapter.addOne,
    addProductDeteails: productAdapter.addOne,
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
      state.notification = setNotification("message", "success", true);
    },
    [fetchProduct.rejected]: setError,

    // add product details
    [fetchProductDetails.pending]: (state: ProductState) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProductDetails.fulfilled]: (state: ProductState, action) => {
      state.status = "resolved";
      state.productDetails = action.payload;
    },
    [fetchProductDetails.rejected]: setError,

    // notification
    [removeNotification.fulfilled]: (state: any) => {
      state.notification = null;
    },
  },
});

export const { addProduct, addProducts, addProductDeteails } =
  productSlice.actions;

export default productSlice.reducer;
