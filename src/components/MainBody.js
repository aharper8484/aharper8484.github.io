import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";

function MainBody() {
  return (
    <div className="mainContainer">
      <div className="mainGrid">
        <Card title="Bio" />
        <Card title="About" />
        <Card title="Skills" />
        <Card title="Timeline" />
        <Card title="Links" />
        <Card title="Socials" />
      </div>
    </div>
  );
}

export default MainBody;
