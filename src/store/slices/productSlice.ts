
import { PayloadAction } from "@reduxjs/toolkit/react";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductsState } from "../../helpers/types";

const initialState: IProductsState = {
  idsList: [],
  productsList: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.productsList = action.payload;
    },
    setIdsList(state,action: PayloadAction<string[]>) {
      state.idsList = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const productActions = productsSlice.actions;