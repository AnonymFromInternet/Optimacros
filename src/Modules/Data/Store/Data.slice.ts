import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataStateInterface } from "../Types/DataState.interface";
import { RootState } from "../../../Shared/GlobalStore/GlobalStore";
import { ParentsAndChildrenInterface } from "../Types/ParentsAndChildren.interface";
import { ErrorType } from "../../../Shared/Types/Error.type";
import { ItemIDType } from "../../Description/Types/ItemID.type";
import { ParentIDType } from "../../Description/Types/ParentID.type";

const initialState: DataStateInterface = {
  isLoading: false,
  children: null,
  parents: null,
  parentIdForShowing: null,
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
    getDataFailureAction: (state, action: PayloadAction<ErrorType>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteParentAction: (state, action: PayloadAction<ItemIDType>) => {
      // filter по parents. Если айди не совпадает тогда вернуть в
    },
    deleteChildAction: (state, action: PayloadAction<ItemIDType>) => {
      // filter по children. Если айди не совпадает тогда вернуть в
    },
    childrenShowedToggler: (state, action: PayloadAction<ParentIDType>) => {
      state.parentIdForShowing = action.payload;
    },
  },
});

// Actions
export const {
  getDataAction,
  getDataSuccessAction,
  getDataFailureAction,
  deleteParentAction,
  childrenShowedToggler,
} = dataSlice.actions;

// Selectors
export const isLoadingSelector = (state: RootState) => state.data.isLoading;
export const childrenSelector = (state: RootState) => state.data.children;
export const parentsSelector = (state: RootState) => state.data.parents;
export const errorSelector = (state: RootState) => state.data.error;

export const parentIdForShowingSelector = (state: RootState) =>
  state.data.parentIdForShowing;

// Reducer
export default dataSlice.reducer;
