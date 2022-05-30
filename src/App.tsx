import React, { useEffect } from "react";

import TopBarComponent from "./Shared/Modules/Topbar/Components/TopBar.component";

import "./App.css";
import GroupComponent from "./Modules/Data/Components/Group/Group.component";
import DescriptionComponent from "./Modules/Data/Components/Description/Description.component";
import { useAppDispatch } from "./Shared/GlobalStore/Hooks";
import { getDataAction } from "./Modules/Data/Store/Data.slice";

function App() {
  // Store
  const dispatch = useAppDispatch();
  // Store

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return (
    <div>
      <TopBarComponent />
      <div className="container">
        <div className="row">
          <div className="col list">
            // map
            <GroupComponent />
            <GroupComponent />
            <GroupComponent />
          </div>
          <div className="col description">
            <DescriptionComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
