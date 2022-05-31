import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DescriptionStateInterface } from "../Types/DescriptionState.interface";
import { RootState } from "../../../Shared/GlobalStore/GlobalStore";
import { ItemIDType } from "../Types/ItemID.type";

const initialState: DescriptionStateInterface = {
  isDescriptionShowing: false,
  itemId: null,
};

const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    showDescriptionAction: (state) => {
      state.isDescriptionShowing = true;
    },
    setItemIdAction: (state, action: PayloadAction<ItemIDType>) => {
      state.itemId = action.payload;
    },
  },
});

// Actions
export const { showDescriptionAction, setItemIdAction } =
  descriptionSlice.actions;

// Selectors
export const isDescriptionShowingSelector = (state: RootState) =>
  state.description.isDescriptionShowing;
export const itemIdSelector = (state: RootState) => state.description.itemId;

export default descriptionSlice.reducer;
