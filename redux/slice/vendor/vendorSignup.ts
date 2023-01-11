import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: object;
  error: object | null;
}

export const postVendorSignUp: any = createAsyncThunk(
  `signup/postVendorSignUp`,
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `https://apis.smartafri.com/api/vendor/auth/register`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);

export const verifyVendorOtp: any = createAsyncThunk(
  `signup/verifyVendorOtp`,
  async ({ id, otp }: { id: string; otp: number }, { rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `https://apis.smartafri.com/api/vendor/otp/verify/${id}`,
        { code: otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
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
  data: {},
  error: null,
};

export const vendorSignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postVendorSignUp.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(postVendorSignUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(postVendorSignUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
    builder.addCase(verifyVendorOtp.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(verifyVendorOtp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(verifyVendorOtp.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = vendorSignupSlice.actions;

export default vendorSignupSlice.reducer;
