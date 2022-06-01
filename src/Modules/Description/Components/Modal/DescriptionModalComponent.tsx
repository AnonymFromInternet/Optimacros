import { FC } from "react";

import { deleteChildAction } from "../../../Data/Store/Data.slice";
import { useAppDispatch } from "../../../../Shared/GlobalStore/Hooks";
import { hideModalAction } from "../../Store/Description.slice";

import "./Modal.component.css";

interface DescriptionModalComponentProps {
  childId: number;
}

const DescriptionModalComponent: FC<DescriptionModalComponentProps> = ({
  childId,
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
          onClick={() => dispatch(deleteChildAction(childId))}
          className="btn btn-outline-danger"
        >
          Delete this element anyway
        </button>
      </div>
    </div>
  );
};

export default DescriptionModalComponent;
