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
import {
  childrenSelector,
  getDataAction,
} from "../../../Data/Store/Data.slice";

const DescriptionComponent = () => {
  // Store
  const children$ = useAppSelector(childrenSelector);
  const child$ = useAppSelector(childSelector);
  const showModal$ = useAppSelector(showModalSelector);
  const dispatch = useAppDispatch();
  // Store

  const apply = (): void => {
    const children = children$?.filter(
      (child) => child.parentId === child$?.parentId
    );
    console.log(
      `You are now in the tree with ID ${
        child$?.parentId
      }. This tree have the following sub-elements:\n ${children?.map(
        (child) => {
          return `Sub-element with label ${child.label}, ID ${child.id}, parent ID ${child.parentId}\n`;
        }
      )}`
    );
  };

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
              onClick={() => apply()}
              className={"btn pull-xs-right btn-outline-primary"}
            >
              Apply
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
