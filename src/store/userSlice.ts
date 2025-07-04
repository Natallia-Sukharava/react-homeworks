import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
}

const initialState: UserState = { name: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearUser: (state) => {
      state.name = "";
    },
  },
});

export const { setUserName, clearUser } = userSlice.actions;
export default userSlice.reducer;