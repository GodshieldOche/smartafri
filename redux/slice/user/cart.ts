import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cart } from "../../../interface";

export const getCart: any = createAsyncThunk(
  `cart/getCart`,
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apis.smartafri.com/api/customer/cart`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
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

// Define the initial state using that type
const initialState: cartState = {
  data: [],
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
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
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const {} = cartSlice.actions;

export default cartSlice.reducer;
