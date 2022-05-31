import { FC } from "react";

import "./Group.component.css";

interface ParentComponentProps {
  id: number;
}

const ParentComponent: FC<ParentComponentProps> = ({ id }) => {
  console.log("id is", id);
  return (
    <div className={"parentComponentContainer"}>
      <div>
        Element with Id <span className={"id-text"}>{id}</span>
      </div>
      <div className={"btn pull-xs-right btn-outline-primary"}>Open</div>
    </div>
  );
};
export default ParentComponent;
