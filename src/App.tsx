import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

import TopBarComponent from "./Shared/Modules/Topbar/Components/TopBar.component";
import ParentComponent from "./Modules/Data/Components/Group/Parent.component";
import DescriptionComponent from "./Modules/Data/Components/Description/Description.component";
import { useAppDispatch, useAppSelector } from "./Shared/GlobalStore/Hooks";
import {
  getDataAction,
  isLoadingSelector,
  parentsSelector,
} from "./Modules/Data/Store/Data.slice";

import "./App.css";
import LoadingComponent from "./Shared/Modules/Loading/Components/Loading.component";

function App() {
  // Store
  const dispatch = useAppDispatch();
  const isLoading$ = useAppSelector(isLoadingSelector);
  const parents$ = useAppSelector(parentsSelector);
  // Store
  const showingDescription = false;

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const content = () => {
    return parents$?.map((parent) => {
      return <ParentComponent key={uuid()} id={parent.id} />;
    });
  };

  return (
    <div>
      <TopBarComponent />
      <div className="container">
        <div className="row">
          <div className="col list">
            {isLoading$ && <LoadingComponent />}
            {
              <>
                <h3>List of data</h3>
                {content()}
              </>
            }
          </div>
          <div className="col description">
            {showingDescription && <DescriptionComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
