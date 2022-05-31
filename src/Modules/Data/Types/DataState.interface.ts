import { ChildInterface } from "./ChildInterface";
import { ParentInterface } from "./Parent.interface";

export interface DataStateInterface {
  isLoading: boolean;
  parents: ParentInterface[] | null;
  children: ChildInterface[] | null;
  error: string | null;
}
