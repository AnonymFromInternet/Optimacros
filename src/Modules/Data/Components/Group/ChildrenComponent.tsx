import { FC } from "react";
import { useAppSelector } from "../../../../Shared/GlobalStore/Hooks";
import {
  childrenSelector,
  parentIdForShowingSelector,
} from "../../Store/Data.slice";

interface ChildrenComponentProps {
  parentId: number;
}

const ChildrenComponent: FC<ChildrenComponentProps> = ({ parentId }) => {
  // Store
  const children$ = useAppSelector(childrenSelector);
  const parentIdForShowing$ = useAppSelector(parentIdForShowingSelector);
  // Store

  const content = () => {
    return children$?.map((child) => {
      return child.parentId === parentId && parentIdForShowing$ === parentId ? (
        <p
          className={"childrenFCParagraph btn btn-outline-primary"}
          key={child.id}
        >
          Element {child.label}
        </p>
      ) : null;
    });
  };
  return <div className={"childrenFCContentContainer"}>{content()}</div>;
};
export default ChildrenComponent;
