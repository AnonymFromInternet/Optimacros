import { ChildInterface } from "../../../Shared/Types/ChildInterface";
import { ParentInterface } from "./Parent.interface";
import { ErrorType } from "../../../Shared/Types/Error.type";

export interface DataStateInterface {
  isLoading: boolean;
  parents: ParentInterface[] | null;
  parentIdForShowing: number | null;
  children: ChildInterface[] | null;
  error: ErrorType | null;
  showModal: boolean;
}
