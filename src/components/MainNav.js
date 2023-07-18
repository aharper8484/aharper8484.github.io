import React from "react";
import "./MainNav.css";
import "./CardToggle";
import CardNav from "./CardNav";

function MainNav() {
  return (
    <div className="mainNavContainer">
      <div className="mainNavGrid">
        <CardNav title="Bio" className="mainNavRowIcon" />
        <CardNav title="Skills" className="mainNavRowIcon" />
        <CardNav title="Timeline" className="mainNavRowIcon" />
        <CardNav title="Links" className="mainNavRowIcon" />
      </div>
    </div>
  );
}

export default MainNav;
