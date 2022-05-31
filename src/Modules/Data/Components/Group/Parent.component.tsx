import { FC } from "react";

import "./Group.component.css";

interface ParentComponentProps {
  id: number;
}

const ParentComponent: FC<ParentComponentProps> = ({ id }) => {
  const content = () => {
    return "child";
  };
  return (
    <>
      <div className={"parentComponentContainer"}>
        <div>
          Element with Id <span className={"id-text"}>{id}</span>
        </div>
        <div className={"open-delete"}>
          <div className={"btn pull-xs-right btn-outline-danger"}>Delete</div>
          <div className={"btn pull-xs-right btn-outline-success"}>Open</div>
        </div>
      </div>
    </>
  );
};
export default ParentComponent;
