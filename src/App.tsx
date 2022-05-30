import React, { useEffect, useState } from "react";
import axios from "axios";

import TopBarComponent from "./Shared/Modules/Topbar/Components/TopBar.component";

import "./App.css";
import GroupComponent from "./Modules/Data/Components/Group/Group.component";
import DescriptionComponent from "./Modules/Data/Components/Description/Description.component";

function App() {
  // Вынести в стор
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/avydashenko/e1702c1ef26cddd006da989aa47d4f62/raw/067f7b75946baf7faf5b8afcd04c66ecf0b47486/view.json"
      )
      .then((response) => {
        setData(response.data);
      });
  }, [setData]);
  // Вынести в стор
  console.log("data is ", data);
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
