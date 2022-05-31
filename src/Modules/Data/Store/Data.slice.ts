import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataStateInterface } from "../Types/DataState.interface";
import { RootState } from "../../../Shared/GlobalStore/GlobalStore";
import { ParentsAndChildrenInterface } from "../Types/ParentsAndChildren.interface";

const initialState: DataStateInterface = {
  isLoading: false,
  children: null,
  parents: null,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getDataAction: (state) => {
      state.isLoading = true;
    },
    getDataSuccessAction: (
      state,
      action: PayloadAction<ParentsAndChildrenInterface>
    ) => {
      state.isLoading = false;
      state.children = action.payload.children;
      state.parents = action.payload.parents;
    },
    getDataFailureAction: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Actions
export const { getDataAction, getDataSuccessAction, getDataFailureAction } =
  dataSlice.actions;

// Selectors
export const isLoadingSelector = (state: RootState) => state.data.isLoading;
export const dataSelector = (state: RootState) => state.data.children;
export const errorSelector = (state: RootState) => state.data.error;

// Reducer
export default dataSlice.reducer;
