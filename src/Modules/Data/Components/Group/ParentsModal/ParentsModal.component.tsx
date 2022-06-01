import { FC } from "react";
import {
  deleteParentAction,
  hideParentsModalAction,
  parentsIdForModalShowingSelector,
  showParentsModalSelector,
} from "../../../Store/Data.slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Shared/GlobalStore/Hooks";

interface ParentsModalComponentProps {
  parentId: number;
}

const ParentsModalComponent: FC<ParentsModalComponentProps> = ({
  parentId,
}) => {
  // Store
  const dispatch = useAppDispatch();
  const showParentsModal$ = useAppSelector(showParentsModalSelector);
  const parentsIdForModalShowing$ = useAppSelector(
    parentsIdForModalShowingSelector
  );
  // Store
  return (
    <>
      {showParentsModal$ && parentsIdForModalShowing$ === parentId && (
        <div className={"description-parents-modal-container"}>
          <h5 className={"modal-title text-danger"}>Are you sure?</h5>

          <div className={"toggler"}>
            <button
              className={"btn btn-xs btn-outline-primary"}
              onClick={() => dispatch(hideParentsModalAction())}
            >
              Close this message
            </button>
            <button
              onClick={() => dispatch(deleteParentAction(parentId))}
              className="btn btn-outline-danger"
            >
              Delete this element anyway
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ParentsModalComponent;
