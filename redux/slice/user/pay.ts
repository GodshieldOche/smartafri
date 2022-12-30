import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface payState {
  loading: boolean;
  data: object | null;
  error: object | null;
}

export const postPayStack: any = createAsyncThunk(
  `pay/postPayStack`,
  async (
    {
      email,
      amount,
      callback_url,
    }: { email: string; amount: string; callback_url: string },
    { dispatch, rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(
        `https://api.paystack.co/transaction/initialize`,
        { email, amount, callback_url },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer sk_test_6db217e6fbac2cc4e993a74a7a09762741ce3321",
          },
        }
      );

      return data;
    } catch (error: any) {
      console.log(rejectWithValue(error));
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const verifyPayment = createAsyncThunk(
  `pay/verifyPayment`,
  async ({ reference }: { reference: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization:
              "Bearer sk_test_6db217e6fbac2cc4e993a74a7a09762741ce3321",
          },
        }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Define the initial state using that type
const initialState: payState = {
  loading: true,
  data: {},
  error: null,
};

export const paySlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postPayStack.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(postPayStack.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(postPayStack.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    builder.addCase(verifyPayment.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(verifyPayment.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(verifyPayment.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = paySlice.actions;

export default paySlice.reducer;
