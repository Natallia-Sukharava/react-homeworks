import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  mealId: string;
  count: number;
  unitPrice: number;
}

export interface CartState {
  items: CartItem[];
  count: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ mealId: string; unitPrice: number; quantity?: number }>
    ) => {
      const { mealId, unitPrice, quantity = 1 } = action.payload;
      const existing = state.items.find((i) => i.mealId === mealId);
      if (existing) {
        existing.count += quantity;
      } else {
        state.items.push({ mealId, unitPrice, count: quantity });
      }
   
      state.count = state.items.reduce((sum, i) => sum + i.count, 0);
      state.total = state.items.reduce((sum, i) => sum + i.count * i.unitPrice, 0);
    },
    removeFromCart: (state, action: PayloadAction<{ mealId: string }>) => {
      state.items = state.items.filter((i) => i.mealId !== action.payload.mealId);
      state.count = state.items.reduce((sum, i) => sum + i.count, 0);
      state.total = state.items.reduce((sum, i) => sum + i.count * i.unitPrice, 0);
    },
    updateCartItemCount: (
      state,
      action: PayloadAction<{ mealId: string; count: number }>
    ) => {
      const { mealId, count } = action.payload;
      const item = state.items.find((i) => i.mealId === mealId);
      if (item && count > 0) {
        item.count = count;
      }
      state.count = state.items.reduce((sum, i) => sum + i.count, 0);
      state.total = state.items.reduce((sum, i) => sum + i.count * i.unitPrice, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.count = 0;
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemCount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
