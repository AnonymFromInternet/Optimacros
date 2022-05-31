import { FC } from "react";

import "./Group.component.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Shared/GlobalStore/Hooks";
import {
  areChildrenShowedSelector,
  childrenSelector,
  childrenShowedToggler,
} from "../../Store/Data.slice";
import ChildComponent from "./Child.component";

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
      <ChildComponent parentId={id} />
    </>
  );
};
export default ParentComponent;
