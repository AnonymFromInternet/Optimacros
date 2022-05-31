import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DescriptionStateInterface } from "../Types/DescriptionState.interface";
import { RootState } from "../../../Shared/GlobalStore/GlobalStore";
import { ChildInterface } from "../../../Shared/Types/ChildInterface";

const initialState: DescriptionStateInterface = {
  child: null,
  showModal: false,
};

const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    setChildAction: (state, action: PayloadAction<ChildInterface | null>) => {
      state.child = action.payload;
    },
    showModalAction: (state) => {
      state.showModal = true;
    },
    hideModalAction: (state) => {
      state.showModal = false;
    },
  },
});

// Actions
export const { setChildAction, hideModalAction, showModalAction } =
  descriptionSlice.actions;

// Selectors
export const childSelector = (state: RootState) => state.description.child;
export const showModalSelector = (state: RootState) =>
  state.description.showModal;

export default descriptionSlice.reducer;
