import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: object;
  error: object | null;
}

export const postRegister: any = createAsyncThunk(
  `user/postRegister`,
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `https://apis.smartafri.com/api/customer/auth/register`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(reset());

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const verifyAccount: any = createAsyncThunk(
  `user/verifyAccount`,
  async ({ otp, token }: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(
        `https://api.payfocuss.com/auth?otp=${otp}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(reset());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resendOtp: any = createAsyncThunk(
  `user/resendOtp`,
  async ({ email, token }: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(
        `https://api.payfocuss.com/auth/reotp?email=${email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(reset());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state using that type
const initialState: authState = {
  loading: true,
  data: {},
  error: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postRegister.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(postRegister.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(postRegister.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = registerSlice.actions;

export default registerSlice.reducer;
