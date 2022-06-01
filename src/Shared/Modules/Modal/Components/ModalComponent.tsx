import { FC } from "react";

import { deleteChildAction } from "../../../../Modules/Data/Store/Data.slice";
import { useAppDispatch } from "../../../GlobalStore/Hooks";
import { hideModalAction } from "../../../../Modules/Description/Store/Description.slice";

import "./Modal.component.css";

interface DescriptionModalComponentProps {
  id: number;
}

const ModalComponent: FC<DescriptionModalComponentProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={"modal-container"}>
      <h5 className={"modal-title text-danger"}>Are you sure?</h5>

      <div className={"toggler"}>
        <button
          className={"btn btn-xs btn-outline-primary"}
          onClick={() => dispatch(hideModalAction())}
        >
          Close this message
        </button>
        <button
          onClick={() => dispatch(deleteChildAction(id))}
          className="btn btn-outline-danger"
        >
          Delete this element anyway
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
