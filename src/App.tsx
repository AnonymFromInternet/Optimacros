import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import { useAppDispatch, useAppSelector } from "./Shared/GlobalStore/Hooks";

import TopBarComponent from "./Shared/Modules/Topbar/Components/TopBar.component";
import ParentComponent from "./Modules/Data/Components/Group/Parent.component";
import {
  getDataAction,
  isLoadingSelector,
  parentsSelector,
} from "./Modules/Data/Store/Data.slice";

import "./App.css";
import LoadingComponent from "./Shared/Modules/Loading/Components/Loading.component";
import DescriptionComponent from "./Modules/Description/Components/Description.component";

function App() {
  // Store
  const dispatch = useAppDispatch();
  const isLoading$ = useAppSelector(isLoadingSelector);
  const parents$ = useAppSelector(parentsSelector);
  // Store

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const content = () => {
    return parents$?.map((parent) => {
      return <ParentComponent key={uuid()} id={parent.id} />;
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
                {content()}
              </>
            }
          </div>
          <div className="col description">
            <h3 className={"title"}>Description</h3>
            <DescriptionComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
