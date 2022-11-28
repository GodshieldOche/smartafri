import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { storeSession } from "./session";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: object;
  error: object | null;
}

export const postSignin: any = createAsyncThunk(
  `signin/postSignin`,
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `https://apis.smartafri.com/api/customer/auth/login`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      dispatch(storeSession(data.data.token));
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

export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postSignin.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(postSignin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(postSignin.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = signinSlice.actions;

export default signinSlice.reducer;
