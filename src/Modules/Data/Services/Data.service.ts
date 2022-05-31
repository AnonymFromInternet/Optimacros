import axios, { AxiosResponse } from "axios";

import { GetDataResponseInterface } from "../../../Shared/Types/GetDataResponseInterface";
import { ChildInterface } from "../../../Shared/Types/ChildInterface";
import { DataInterface } from "../Types/Data.interface";
import { ParentInterface } from "../Types/Parent.interface";

export class DataService {
  static createChildrenArray(data: DataInterface): ChildInterface[] {
    let itemsArray: ChildInterface[] = [];
    for (let i = 0; i < data.entityLongIds.length; i++) {
      let item: ChildInterface = { label: "", parentId: 0, id: 0 };
      item.id = data.entityLongIds[i];
      item.label = data.labels[i];
      item.parentId = data.parentEntityLongIds[i];
      itemsArray.push(item);
    }
    return itemsArray;
  }

  static createParentsArray(children: ChildInterface[]): ParentInterface[] {
    let parentsArray: ParentInterface[] = [];
    let parents: any = {};
    for (let i = 0; i < children.length; i++) {
      if (!parents.hasOwnProperty(children[i].parentId)) {
        parents[`${children[i].parentId}`] = children[i].parentId;
      }
    }
    let array = Object.values(parents);
    for (let i = 0; i < array.length; i++) {
      let parent: ParentInterface = { id: 0 };
      parent.id = Number(array[i]);
      parentsArray.push(parent);
    }
    return parentsArray;
  }

  static async getData(): Promise<AxiosResponse<GetDataResponseInterface>> {
    return axios.request<GetDataResponseInterface>({
      url: "https://gist.githubusercontent.com/avydashenko/e1702c1ef26cddd006da989aa47d4f62/raw/067f7b75946baf7faf5b8afcd04c66ecf0b47486/view.json",
      method: "GET",
    });
  }
}
