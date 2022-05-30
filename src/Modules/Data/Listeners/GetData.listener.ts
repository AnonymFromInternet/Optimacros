import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  getDataAction,
  getDataFailureAction,
  getDataSuccessAction,
} from "../Store/Data.slice";
import { DataService } from "../Services/Data.service";

export const getDataListener = createListenerMiddleware();

getDataListener.startListening({
  actionCreator: getDataAction,
  effect: async (action, listenerApi) => {
    DataService.getData()
      .then((response) => {
        listenerApi.dispatch(
          getDataSuccessAction(response.data.entityLabelPages[0])
        );
      })
      .catch(() => {
        listenerApi.dispatch(getDataFailureAction("Error by getting data"));
      });
  },
});
