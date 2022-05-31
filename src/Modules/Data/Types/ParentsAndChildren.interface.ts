import { ParentInterface } from "./Parent.interface";
import { ChildInterface } from "../../../Shared/Types/ChildInterface";

export interface ParentsAndChildrenInterface {
  parents: ParentInterface[];
  children: ChildInterface[];
}
