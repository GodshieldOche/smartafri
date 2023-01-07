import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cart } from "../../interface";

export const getCart: any = createAsyncThunk(
  `cart/getCart`,
  async (token, { rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(
        `https://apis.smartafri.com/api/customer/cart`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.data.data;
    } catch (error: any) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postAddToCart: any = createAsyncThunk(
  `cart/postAddToCart`,
  async (
    {
      token,
      product_id,
      quantity,
    }: { token: string; product_id: number; quantity: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data }: any = await axios.post(
        `https://apis.smartafri.com/api/customer/cart`,
        { product_id, quantity },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await dispatch(getCart(token));
      return data;
    } catch (error: any) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateQuantity: any = createAsyncThunk(
  `cart/updateQuantity`,
  async (
    { token, id, quantity }: { token: string; id: number; quantity: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data }: any = await axios.patch(
        `https://apis.smartafri.com/api/customer/cart/${id}`,
        { quantity },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await dispatch(getCart(token));
      return data;
    } catch (error: any) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteItem: any = createAsyncThunk(
  `cart/deleteItem`,
  async (
    { token, id }: { token: string; id: number },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data }: any = await axios.delete(
        `https://apis.smartafri.com/api/customer/cart/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await dispatch(getCart(token));
      return data;
    } catch (error: any) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Define a type for the slice state
export interface cartState {
  data: cart[];
  loading: boolean;
  error: object | null;
}

let items: cart[] = [];

if (typeof window !== "undefined") {
  // Perform localStorage action
  items = JSON.parse(localStorage.getItem("cart")!) || [];
}

// Define the initial state using that type
const initialState: cartState = {
  data: items,
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(getCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    builder.addCase(postAddToCart.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(postAddToCart.fulfilled, (state, { payload }) => {
        state.loading = false;
        // const cart = [...state.data];
        // cart.push(payload);
        // state.data = cart;
      }),
      builder.addCase(postAddToCart.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    builder.addCase(updateQuantity.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(updateQuantity.fulfilled, (state, { payload }) => {
        state.loading = false;
      }),
      builder.addCase(updateQuantity.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    builder.addCase(deleteItem.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
        state.loading = false;
      }),
      builder.addCase(deleteItem.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { clearCart, addToCart, increment, decrement, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
