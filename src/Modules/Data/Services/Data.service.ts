import axios from "axios";
import { GetDataResponseInterface } from "../../../Shared/Types/GetDataResponseInterface";
import { ItemInterface } from "../Types/Item.interface";
import { DataInterface } from "../Types/Data.interface";

export class DataService {
  static createItemsArray(data: DataInterface): ItemInterface[] {
    let itemsArray: ItemInterface[] = [];
    for (let i = 0; i < data.entityLongIds.length; i++) {
      let item: ItemInterface = {};
      item.id = data.entityLongIds[i];
      item.label = data.labels[i];
      item.parentId = data.parentEntityLongIds[i];
      itemsArray.push(item);
      item = {};
    }
    return itemsArray;
  }

  static async getData() {
    return axios.request<GetDataResponseInterface>({
      url: "https://gist.githubusercontent.com/avydashenko/e1702c1ef26cddd006da989aa47d4f62/raw/067f7b75946baf7faf5b8afcd04c66ecf0b47486/view.json",
      method: "GET",
    });
  }
}
