import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productReducer';

const store = configureStore({
    reducer: {
        products: productReducer
    }
})

export default store;

