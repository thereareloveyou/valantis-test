import { PayloadAction } from "@reduxjs/toolkit/react";
import { createSlice } from "@reduxjs/toolkit";
import { IPaginationState } from "../../helpers/types";

const initialState: IPaginationState = {
  page: 1,
  amountPages: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setAmountPages(state, action: PayloadAction<number>) {
      state.amountPages = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const paginationActions = paginationSlice.actions;
