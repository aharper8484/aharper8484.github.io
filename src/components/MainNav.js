import React from "react";
import "./MainNav.css";
import "./CardToggle";
import CardNav from "./CardNav";

function MainNav() {
  return (
    <div className="mainContainer">
      <div className="mainGrid">
        <CardNav title="Bio" />
        <CardNav title="Skills" />
        <CardNav title="Timeline" />
        <CardNav title="Links" />
      </div>
    </div>
  );
}

export default MainNav;
