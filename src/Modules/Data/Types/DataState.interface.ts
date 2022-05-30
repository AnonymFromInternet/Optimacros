import { DataInterface } from "./Data.interface";

export interface DataStateInterface {
  isLoading: boolean;
  data: DataInterface | null;
  error: string | null;
}
