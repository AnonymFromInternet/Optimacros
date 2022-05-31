import { createListenerMiddleware } from "@reduxjs/toolkit";
import { showDescriptionAction } from "../../Data/Store/Data.slice";
import { setChildAction } from "../Store/Description.slice";

export const descriptionListener = createListenerMiddleware();

descriptionListener.startListening({
  actionCreator: showDescriptionAction,
  effect: (action, listenerApi) => {
    listenerApi.dispatch(setChildAction(action.payload));
  },
});
