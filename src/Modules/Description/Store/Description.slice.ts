import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DescriptionStateInterface } from "../Types/DescriptionState.interface";
import { RootState } from "../../../Shared/GlobalStore/GlobalStore";
import { ChildInterface } from "../../../Shared/Types/ChildInterface";

const initialState: DescriptionStateInterface = {
  child: null,
};

const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    setChildAction: (state, action: PayloadAction<ChildInterface>) => {
      state.child = action.payload;
    },
  },
});

// Actions
export const { setChildAction } = descriptionSlice.actions;

// Selectors
export const childSelector = (state: RootState) => state.description.child;

export default descriptionSlice.reducer;
