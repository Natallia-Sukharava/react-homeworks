import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Meal } from "../types";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const res = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
  if (!res.ok) throw new Error("Failed to fetch menu");
  return (await res.json()) as Meal[];
});

interface MenuState {
  meals: Meal[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  meals:  [],
  loading: false,
  error:   null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error   = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.meals   = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error   = action.error.message ?? "Failed to fetch menu";
      });
  },
});

export default menuSlice.reducer;