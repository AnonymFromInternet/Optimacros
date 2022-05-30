import axios from "axios";
import { GetDataResponseInterface } from "../../../Shared/Types/GetDataResponseInterface";

export class DataService {
  static async getData() {
    return axios.request<GetDataResponseInterface>({
      url: "https://gist.githubusercontent.com/avydashenko/e1702c1ef26cddd006da989aa47d4f62/raw/067f7b75946baf7faf5b8afcd04c66ecf0b47486/view.json",
      method: "GET",
    });
  }
}
