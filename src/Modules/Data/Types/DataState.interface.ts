import { ItemInterface } from "./Item.interface";

export interface DataStateInterface {
  isLoading: boolean;
  data: ItemInterface[] | null;
  error: string | null;
}
