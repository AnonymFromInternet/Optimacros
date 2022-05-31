import "./Description.component.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/GlobalStore/Hooks";
import { childSelector } from "../Store/Description.slice";

const DescriptionComponent = () => {
  // Store
  const child$ = useAppSelector(childSelector);
  const dispatch = useAppDispatch(); // deleteParentAction
  // Store
  return (
    <>
      {child$ && (
        <>
          <div className={"descriptionComponentContainer"}>
            <div className={"parentComponentContainer"}>
              Label: <span className={"text-primary"}>{child$.label}</span>
            </div>
            <div className={"parentComponentContainer"}>
              Id: <span className={"text-primary"}>{child$.id}</span>
            </div>
            <div className={"parentComponentContainer"}>
              Parent's Id:{" "}
              <span className={"text-primary"}>{child$.parentId}</span>
            </div>
          </div>
          <div className={"in-description"}>
            <div className={"btn pull-xs-right btn-outline-success"}>
              Refresh
            </div>
            <div className={"btn pull-xs-right btn-outline-danger"}>Delete</div>
          </div>
        </>
      )}
    </>
  );
};
export default DescriptionComponent;
