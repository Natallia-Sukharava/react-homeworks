import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    orders: orderReducer,
    menu: menuReducer,
  },
});

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;