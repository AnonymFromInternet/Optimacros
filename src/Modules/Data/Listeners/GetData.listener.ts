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
        let items = DataService.createItemsArray(
          response.data.entityLabelPages[0]
        );
        listenerApi.dispatch(getDataSuccessAction(items));
      })
      .catch(() => {
        listenerApi.dispatch(getDataFailureAction("Error by getting data"));
      });
  },
});
