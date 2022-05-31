import { FC } from "react";

import { deleteChildAction } from "../../../../Modules/Data/Store/Data.slice";
import { useAppDispatch } from "../../../GlobalStore/Hooks";
import { hideModalAction } from "../../../../Modules/Description/Store/Description.slice";

interface DescriptionModalComponentProps {
  id: number;
}

const DescriptionModalComponent: FC<DescriptionModalComponentProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <h5>Are you sure?</h5>
      </div>
      <div>
        <button onClick={() => dispatch(hideModalAction())}>
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

export default DescriptionModalComponent;
