// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/authApi";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
