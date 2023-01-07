import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { product } from "../../../interface";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data?: product;
  error: object | null;
}

export const getProduct: any = createAsyncThunk(
  `product/getProduct`,
  async (id: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(
        `https://apis.smartafri.com/api/web/products`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const payload = data.data.data.find(
        (item: any) => item.id.toString() === id.toString()
      );

      return payload;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state using that type
const initialState: authState = {
  loading: true,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(getProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = productSlice.actions;

export default productSlice.reducer;
