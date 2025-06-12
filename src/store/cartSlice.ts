import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  count: number;
  total: number;
};

const initialState: CartState = {
  count: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ totalPrice?: number; quantity?: number }>
    ) => {
      const { quantity = 1, totalPrice = 0 } = action.payload;
      state.count += quantity;
      state.total += totalPrice;
    },
    clearCart: (state) => {
      state.count = 0;
      state.total = 0;
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
