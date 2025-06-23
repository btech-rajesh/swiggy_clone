import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";

// import { userReducer } from 'react';


const appStore = configureStore({
    reducer:{
       cart:cartReducer,
        // user:userReducer
    }
});

export default appStore;
// This code sets up a Redux store using the `configureStore` function from Redux Toolkit.
