import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./ApiSlice.js";
import userSlice from "./rootReducer";
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
