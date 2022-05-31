import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  getDataAction,
  getDataFailureAction,
  getDataSuccessAction,
} from "../Store/Data.slice";
import { DataService } from "../Services/Data.service";
import { ChildInterface } from "../Types/ChildInterface";
import { ParentsAndChildrenInterface } from "../Types/ParentsAndChildren.interface";

export const getDataListener = createListenerMiddleware();

getDataListener.startListening({
  actionCreator: getDataAction,
  effect: async (action, listenerApi) => {
    DataService.getData()
      .then((response) => {
        let children: ChildInterface[] = DataService.createChildrenArray(
          response.data.entityLabelPages[0]
        );
        let parents = DataService.createParentsArray(children);
        let parentsAndChildren: ParentsAndChildrenInterface = {
          parents,
          children,
        };
        listenerApi.dispatch(getDataSuccessAction(parentsAndChildren));
      })
      .catch(() => {
        listenerApi.dispatch(getDataFailureAction("Error by getting data"));
      });
  },
});
