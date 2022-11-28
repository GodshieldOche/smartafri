import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuReducer from "./slice/menu";
import registerReducer from "./slice/register";
import signinReducer from "./slice/signin";
import sessionReducer from "./slice/session";

const makeStore = () =>
  configureStore({
    reducer: {
      menu: menuReducer,
      register: registerReducer,
      signin: signinReducer,
      session: sessionReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof makeStore.prototype.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
