import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { storeSession } from "../session";

export type error = {
  errors: {}[];
};

// Define a type for the slice state
export interface authState {
  loading: boolean;
  data: object;
  error: object | null;
}

export const postVendorSignIn: any = createAsyncThunk(
  `signin/postVendorSignIn`,
  async (body: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `https://apis.smartafri.com/api/vendor/auth/login`,
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

// Define the initial state using that type
const initialState: authState = {
  loading: true,
  data: {},
  error: null,
};

export const vendorSignInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postVendorSignIn.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(postVendorSignIn.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(postVendorSignIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type
export const { reset } = vendorSignInSlice.actions;

export default vendorSignInSlice.reducer;
