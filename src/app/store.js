import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productSlice'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/signup/authSlice'
import favoritesReducer from "../features/favourite/favoritesSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    favorites: favoritesReducer,
  },
});