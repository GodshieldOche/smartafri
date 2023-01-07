import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { product } from "../../../interface";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: product[];
  error: object | null;
}

export const getProducts: any = createAsyncThunk(
  `products/getProducts`,
  async (obj, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(
        `https://apis.smartafri.com/api/web/products`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state using that type
const initialState: authState = {
  loading: true,
  data: [],
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload.data.data;
      }),
      builder.addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = productsSlice.actions;

export default productsSlice.reducer;
