import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface menuState {
  menuState: boolean;
}

// Define the initial state using that type
const initialState: menuState = {
  menuState: false,
};

export const menuSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setMenuState: (state, { payload }) => {
      state.menuState = payload;
    },
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { setMenuState } = menuSlice.actions;

export default menuSlice.reducer;
