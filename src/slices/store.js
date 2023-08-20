import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import bagSlice from "./bagSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    bag: bagSlice
  },
});
