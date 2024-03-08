import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productSlice";
import paginationSlice from "./slices/paginationSlice";
import filterSlice from "./slices/filterSlice";
import statusSlice from "./slices/statusSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    pagination: paginationSlice,
    filter: filterSlice,
    status: statusSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
