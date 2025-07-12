import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/authApi";
import authReducer from "../features/authSlice";
import { productApi } from "../features/productApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productApi.middleware),
});
