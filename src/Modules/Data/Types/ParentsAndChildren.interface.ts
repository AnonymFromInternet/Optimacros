import { ParentInterface } from "./Parent.interface";
import { ChildInterface } from "./ChildInterface";

export interface ParentsAndChildrenInterface {
  parents: ParentInterface[];
  children: ChildInterface[];
}
