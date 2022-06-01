import { FC } from "react";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Shared/GlobalStore/Hooks";
import {
  childrenSelector,
  parentIdForShowingSelector,
  showDescriptionAction,
} from "../../Store/Data.slice";

interface ChildrenComponentProps {
  parentId: number;
}

const ChildrenComponent: FC<ChildrenComponentProps> = ({ parentId }) => {
  // Store
  const children$ = useAppSelector(childrenSelector);
  const parentIdForShowing$ = useAppSelector(parentIdForShowingSelector);
  const dispatch$ = useAppDispatch();
  // Store

  const toDescription = (): void => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const content = () => {
    return children$?.map((child) => {
      return child.parentId === parentId && parentIdForShowing$ === parentId ? (
        <p
          onClick={() => {
            dispatch$(showDescriptionAction(child));
            toDescription();
          }}
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
