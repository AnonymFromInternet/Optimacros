import { FC } from "react";

import { useAppDispatch } from "../../../../Shared/GlobalStore/Hooks";
import {
  childrenShowedToggler,
  showParentsModalAction,
} from "../../Store/Data.slice";
import ChildrenComponent from "./ChildrenComponent";

import "./Group.component.css";
import ParentsModalComponent from "./ParentsModal/ParentsModal.component";

interface ParentComponentProps {
  id: number;
}

const ParentsComponent: FC<ParentComponentProps> = ({ id }) => {
  // Store
  const dispatch = useAppDispatch();
  // Store

  return (
    <>
      <div className={"parentComponentContainer"}>
        <div>
          Element with Id <span className={"id-text"}>{id}</span>
        </div>
        <div className={"open-delete"}>
          <div
            onClick={() => {
              dispatch(showParentsModalAction(id));
            }}
            className={"btn pull-xs-right btn-outline-danger"}
          >
            Delete
          </div>
          <div
            onClick={() => dispatch(childrenShowedToggler(id))}
            className={"btn pull-xs-right btn-outline-success"}
          >
            Open
          </div>
        </div>
      </div>
      <ParentsModalComponent parentId={id} />
      <ChildrenComponent parentId={id} />
    </>
  );
};
export default ParentsComponent;
