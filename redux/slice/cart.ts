import { createSlice } from "@reduxjs/toolkit";
import { cart } from "../../interface";

// Define a type for the slice state
export interface cartState {
  data: cart[];
}

let items: cart[] = [];

if (typeof window !== "undefined") {
  // Perform localStorage action
  items = JSON.parse(localStorage.getItem("cart")!) || [];
}

// Define the initial state using that type
const initialState: cartState = {
  data: items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      const cart: cart[] = [];
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      state.data = cart;
    },
    addToCart: (state, { payload }) => {
      const cart = [...state.data];
      cart.push(payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      state.data = cart;
    },
    increment: (state, { payload }) => {
      const incCart = state.data.map((item) => {
        if (item.id.toString() === payload.toString()) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(incCart));
      }
      state.data = incCart;
    },
    decrement: (state, { payload }) => {
      const decCart = state.data.map((item) => {
        if (item.id.toString() === payload.toString()) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      });

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(decCart));
      }
      state.data = decCart;
    },
    deleteFromCart: (state, { payload }) => {
      const filCart = state.data.filter(
        (item) => item.id.toString() !== payload.toString()
      );
      localStorage.setItem("cart", JSON.stringify(filCart));

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(filCart));
      }
      state.data = filCart;
    },
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { clearCart, addToCart, increment, decrement, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
