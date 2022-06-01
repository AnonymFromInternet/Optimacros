import { ChildInterface } from "../../../Shared/Types/ChildInterface";
import { ParentInterface } from "./Parent.interface";
import { ErrorType } from "../../../Shared/Types/Error.type";
import { ParentIDType } from "../../Description/Types/ParentID.type";

export interface DataStateInterface {
  isLoading: boolean;
  parents: ParentInterface[] | null;
  parentsIdForModalShowing: ParentIDType | null;
  parentIdForShowing: ParentIDType | null;
  children: ChildInterface[] | null;
  error: ErrorType | null;
  showModal: boolean;
}
