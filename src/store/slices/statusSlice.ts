import { PayloadAction } from "@reduxjs/toolkit/react";
import { createSlice } from "@reduxjs/toolkit";
import { IStatusState } from "../../helpers/types";

const initialState: IStatusState = {
  isLoading: true,
  isErrorIDS: false,
  isErrorItems: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  },
});

export default statusSlice.reducer;
export const statusActions = statusSlice.actions;
