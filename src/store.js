import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Features/Cart/cartSlice";
import userReducer from "./Features/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState : cartSlice,
    userState : userReducer
  }
})