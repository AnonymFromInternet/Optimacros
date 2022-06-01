import { FC } from "react";
import { hideModalAction } from "../../../../Description/Store/Description.slice";
import { deleteParentAction } from "../../../Store/Data.slice";
import { useAppDispatch } from "../../../../../Shared/GlobalStore/Hooks";

interface ParentsModalComponentProps {
  parentId: number;
}

const ParentsModalComponent: FC<ParentsModalComponentProps> = ({
  parentId,
}) => {
  // Store
  const dispatch = useAppDispatch();
  // Store
  return (
    <div className={"description-modal-container"}>
      <h5 className={"modal-title text-danger"}>Are you sure?</h5>

      <div className={"toggler"}>
        <button
          className={"btn btn-xs btn-outline-primary"}
          onClick={() => dispatch(hideModalAction())}
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
  );
};
export default ParentsModalComponent;
