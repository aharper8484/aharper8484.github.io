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
          onClick={() => props.setActiveIndex("bio")}
        />
        <CardNav
          title="Skills"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex("skills")}
        />
        <CardNav
          title="Timeline"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex("timeline")}
        />
        <CardNav
          title="Links"
          className="mainNavRowIcon"
          onClick={() => props.setActiveIndex("links")}
        />
      </div>
    </div>
  );
}

export default MainNav;
