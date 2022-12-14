import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuReducer from "./slice/menu";
import cartReducer from "./slice/cart";
import userCartReducer from "./slice/user/cart";
import registerReducer from "./slice/auth/register";
import signinReducer from "./slice/auth/signin";
import sessionReducer from "./slice/auth/session";
import vendorSignInReducer from "./slice/vendor/vendorSignin";
import vendorSignupReducer from "./slice/vendor/vendorSignup";
import productsReducer from "./slice/web/products";
import productReducer from "./slice/web/product";
import payReducer from "./slice/user/pay";

const makeStore = () =>
  configureStore({
    reducer: {
      menu: menuReducer,
      cart: cartReducer,
      userCart: userCartReducer,
      products: productsReducer,
      product: productReducer,
      register: registerReducer,
      signin: signinReducer,
      session: sessionReducer,
      vendorSignIn: vendorSignInReducer,
      vendorSignup: vendorSignupReducer,
      pay: payReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof makeStore.prototype.dispatch;

export const wrapper = createWrapper<AppStore>(makeStore);
