import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DataStateInterface } from "../Types/DataState.interface";
import { RootState } from "../../../Shared/GlobalStore/GlobalStore";
import { ParentsAndChildrenInterface } from "../Types/ParentsAndChildren.interface";
import { ErrorType } from "../../../Shared/Types/Error.type";
import { ItemIDType } from "../../Description/Types/ItemID.type";
import { ParentIDType } from "../../Description/Types/ParentID.type";
import { ChildInterface } from "../../../Shared/Types/ChildInterface";

const initialState: DataStateInterface = {
  parentsIdForModalShowing: null,
  showModal: false,
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
      if (state.parents) {
        state.parents = state.parents.filter(
          (parent) => parent.id !== action.payload
        );
        state.parentsIdForModalShowing = null;
        state.showModal = false;
      }
    },
    deleteChildAction: (state, action: PayloadAction<ItemIDType>) => {
      if (state.children) {
        state.children = state.children.filter(
          (child) => child.id !== action.payload
        );
      }
    },
    childrenShowedToggler: (state, action: PayloadAction<ParentIDType>) => {
      state.parentIdForShowing = action.payload;
    },
    showDescriptionAction: (state, action: PayloadAction<ChildInterface>) => {},
    showParentsModalAction: (state, action: PayloadAction<ParentIDType>) => {
      state.showModal = true;
      state.parentsIdForModalShowing = action.payload;
    },
    hideParentsModalAction: (state) => {
      state.showModal = false;
    },
  },
});

// Actions
export const {
  getDataAction,
  getDataSuccessAction,
  getDataFailureAction,
  deleteParentAction,
  deleteChildAction,
  childrenShowedToggler,
  showDescriptionAction,
  showParentsModalAction,
  hideParentsModalAction,
} = dataSlice.actions;

// Selectors
export const isLoadingSelector = (state: RootState) => state.data.isLoading;
export const childrenSelector = (state: RootState) => state.data.children;
export const parentsSelector = (state: RootState) => state.data.parents;
export const parentsIdForModalShowingSelector = (state: RootState) =>
  state.data.parentsIdForModalShowing;
export const errorSelector = (state: RootState) => state.data.error;
export const showParentsModalSelector = (state: RootState) =>
  state.data.showModal;

export const parentIdForShowingSelector = (state: RootState) =>
  state.data.parentIdForShowing;

// Reducer
export default dataSlice.reducer;
