import { ChildInterface } from "./ChildInterface";
import { ParentInterface } from "./Parent.interface";
import { ErrorType } from "../../../Shared/Types/Error.type";

export interface DataStateInterface {
  isLoading: boolean;
  parents: ParentInterface[] | null;
  children: ChildInterface[] | null;
  error: ErrorType | null;
}
