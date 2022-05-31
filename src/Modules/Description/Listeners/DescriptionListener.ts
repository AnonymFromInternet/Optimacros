import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  deleteChildAction,
  showDescriptionAction,
} from "../../Data/Store/Data.slice";
import { hideModalAction, setChildAction } from "../Store/Description.slice";

export const descriptionListener = createListenerMiddleware();

descriptionListener.startListening({
  actionCreator: showDescriptionAction,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(setChildAction(action.payload));
  },
});

export const deleteChildListener = createListenerMiddleware();

deleteChildListener.startListening({
  actionCreator: deleteChildAction,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(setChildAction(null));
    listenerApi.dispatch(hideModalAction());
  },
});
