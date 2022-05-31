import "./Description.component.css";
import { useAppDispatch } from "../../../Shared/GlobalStore/Hooks";

const DescriptionComponent = () => {
  // Store
  const dispatch = useAppDispatch(); // deleteParentAction
  // Store
  return (
    <div className={"descriptionComponentContainer"}>
      <div className={"text-primary parentComponentContainer"}>Label:</div>
      <div className={"text-primary parentComponentContainer"}>Id:</div>
      <div className={"text-primary parentComponentContainer"}>
        Parent's Id:
      </div>
      <div className={"in-description"}>
        <div className={"btn pull-xs-right btn-outline-danger"}>Delete</div>
        <div className={"btn pull-xs-right btn-outline-success"}>Refresh</div>
      </div>
    </div>
  );
};
export default DescriptionComponent;
