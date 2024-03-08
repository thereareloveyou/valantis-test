import { PayloadAction } from "@reduxjs/toolkit/react";
import { createSlice } from "@reduxjs/toolkit";
import { IFilterState } from "../../helpers/types";

const initialState: IFilterState = {
  filterType: "product",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;
