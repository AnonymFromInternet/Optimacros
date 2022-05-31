import { FC } from "react";
import { useAppSelector } from "../../../../Shared/GlobalStore/Hooks";
import {
  areChildrenShowedSelector,
  childrenSelector,
  parentIdForShowingSelector,
} from "../../Store/Data.slice";

interface ChildComponentProps {
  parentId: number;
}

const ChildComponent: FC<ChildComponentProps> = ({ parentId }) => {
  // Store
  const areChildrenShowed$ = useAppSelector(areChildrenShowedSelector);
  const children$ = useAppSelector(childrenSelector);
  const parentIdForShowing$ = useAppSelector(parentIdForShowingSelector);
  // номер нажавшего родителя и его указывать в условии при отображении?
  // Store

  const content = () => {
    return children$?.map((child) => {
      return child.parentId === parentId &&
        areChildrenShowed$ &&
        parentIdForShowing$ === parentId ? (
        <p key={child.id}>Element {child.label}</p>
      ) : null;
    });
  };
  return <>{content()}</>;
};
export default ChildComponent;
