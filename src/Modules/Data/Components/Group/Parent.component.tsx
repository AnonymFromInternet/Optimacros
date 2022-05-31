import { FC } from "react";

import "./Group.component.css";
import { useAppDispatch } from "../../../../Shared/GlobalStore/Hooks";
import { childrenShowedToggler } from "../../Store/Data.slice";
import ChildrenComponent from "./ChildrenComponent";

interface ParentComponentProps {
  id: number;
}

const ParentComponent: FC<ParentComponentProps> = ({ id }) => {
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
          <div className={"btn pull-xs-right btn-outline-danger"}>Delete</div>
          <div
            onClick={() => dispatch(childrenShowedToggler(id))}
            className={"btn pull-xs-right btn-outline-success"}
          >
            Open
          </div>
        </div>
      </div>
      <ChildrenComponent parentId={id} />
    </>
  );
};
export default ParentComponent;
