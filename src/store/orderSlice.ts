import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Order } from "../types";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const res = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders");
  if (!res.ok) throw new Error("Failed to fetch orders");
  return (await res.json()) as Order[];
});

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error:   string | null;
}

const initialState: OrdersState = {
  orders:  [],
  loading: false,
  error:   null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error   = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders  = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error   = action.error.message ?? "Failed to load orders";
      });
  },
});

export default orderSlice.reducer;