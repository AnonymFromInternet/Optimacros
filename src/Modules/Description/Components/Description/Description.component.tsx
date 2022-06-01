import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Shared/GlobalStore/Hooks";
import {
  childSelector,
  showModalAction,
  showModalSelector,
} from "../../Store/Description.slice";

import "./Description.component.css";
import DescriptionModalComponent from "../Modal/DescriptionModalComponent";
import { getDataAction } from "../../../Data/Store/Data.slice";

const DescriptionComponent = () => {
  // Store
  const child$ = useAppSelector(childSelector);
  const showModal$ = useAppSelector(showModalSelector);
  const dispatch = useAppDispatch();
  // Store

  return (
    <>
      {!child$ && <p style={{ padding: "6px" }}>Please choose an element</p>}
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
            <div
              onClick={() => dispatch(getDataAction())}
              className={"btn pull-xs-right btn-outline-success"}
            >
              Refresh
            </div>
            <div
              onClick={() => dispatch(showModalAction())}
              className={"btn pull-xs-right btn-outline-danger"}
            >
              Delete
            </div>
          </div>
          {showModal$ && <DescriptionModalComponent childId={child$.id} />}
        </>
      )}
    </>
  );
};
export default DescriptionComponent;
