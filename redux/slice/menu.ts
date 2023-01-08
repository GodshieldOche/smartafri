import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface menuState {
  menuState: boolean;
  redirect: string;
}

// Define the initial state using that type
const initialState: menuState = {
  menuState: false,
  redirect: "",
};

export const menuSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setMenuState: (state, { payload }) => {
      state.menuState = payload;
    },
    setRedirect: (state, { payload }) => {
      state.redirect = payload;
    },
    resetRedirect: (state) => {
      state.redirect = "";
    },
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { setMenuState, setRedirect, resetRedirect } = menuSlice.actions;

export default menuSlice.reducer;
