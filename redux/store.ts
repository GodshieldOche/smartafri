import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuReducer from "./slice/menu";

const makeStore = () =>
  configureStore({
    reducer: {
      menu: menuReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof makeStore.prototype.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
