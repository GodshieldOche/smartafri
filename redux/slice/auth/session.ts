import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const storeSession: any = createAsyncThunk(
  `user/storeSession`,
  async (token: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(`/api/user/session`, token, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(reset());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSession: any = createAsyncThunk(
  `user/getSession`,
  async (obj: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.get(`/api/user/token`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(reset());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout: any = createAsyncThunk(
  `user/logout`,
  async (obj: any, { dispatch, rejectWithValue }) => {
    try {
      const { data }: any = await axios.post(
        `/api/user/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
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

// Define a type for the slice state
interface sessionState {
  loading: boolean;
  data: string;
  message: string;
  error: string;
}

// Define the initial state using that type
const initialState: sessionState = {
  loading: false,
  data: "",
  message: "",
  error: "",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    reset: (state) => {
      return (state = initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(storeSession.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(storeSession.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
      }),
      builder.addCase(storeSession.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(getSession.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(getSession.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.token;
      }),
      builder.addCase(getSession.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      }),
      builder.addCase(logout.pending, (state) => {
        state.loading = true;
      }),
      builder.addCase(logout.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload;
      }),
      builder.addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
      });
  },
});

// // Other code such as selectors can use the imported `RootState` type

export const { reset } = sessionSlice.actions;

export default sessionSlice.reducer;
