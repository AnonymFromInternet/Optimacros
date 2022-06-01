import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "./Shared/GlobalStore/Hooks";

import TopBarComponent from "./Shared/Modules/Topbar/Components/TopBar.component";
import ParentsComponent from "./Modules/Data/Components/Group/ParentsComponent";
import {
  errorSelector,
  getDataAction,
  isLoadingSelector,
  parentsSelector,
} from "./Modules/Data/Store/Data.slice";

import "./App.css";
import LoadingComponent from "./Shared/Modules/Loading/Components/Loading.component";
import DescriptionComponent from "./Modules/Description/Components/Description/Description.component";
import {
  childSelector,
  hideModalAction,
  setChildAction,
} from "./Modules/Description/Store/Description.slice";
import DescriptionModalComponent from "./Modules/Description/Components/Modal/DescriptionModalComponent";
import ErrorComponent from "./Shared/Modules/Error/Components/Error.component";

function App() {
  // Store
  const dispatch = useAppDispatch();
  const isLoading$ = useAppSelector(isLoadingSelector);
  const parents$ = useAppSelector(parentsSelector);
  const child$ = useAppSelector(childSelector);
  const error$ = useAppSelector(errorSelector);
  // Store

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const content = () => {
    return parents$?.map((parent) => {
      return <ParentsComponent key={uuid()} id={parent.id} />;
    });
  };

  return (
    <>
      <TopBarComponent />
      <div className="container">
        {isLoading$ && <LoadingComponent />}
        <div className="row">
          <div className="col list">
            {
              <>
                <h3 className={"title"}>List of data</h3>
                {error$ && <ErrorComponent />}
                {content()}
              </>
            }
          </div>
          <div className="col description">
            <div className="description-title">
              <h3 className={"title"}>Description</h3>
              {child$ && (
                <div
                  onClick={() => {
                    dispatch(setChildAction(null));
                    dispatch(hideModalAction());
                  }}
                  className={"btn btn-outline-danger"}
                >
                  x
                </div>
              )}
            </div>
            <DescriptionComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
