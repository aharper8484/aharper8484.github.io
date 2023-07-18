import React from "react";
import "./MainNav.css";
import "./CardToggle";
import CardNav from "./CardNav";

function MainNav(props) {
  return (
    <div className="mainNavContainer">
      <div className="mainNavGrid">
        <CardNav
          title="Bio"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex(1)}
        />
        <CardNav
          title="Skills"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex(2)}
        />
        <CardNav
          title="Timeline"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex(3)}
        />
        <CardNav
          title="Links"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex(4)}
        />
      </div>
    </div>
  );
}

export default MainNav;
