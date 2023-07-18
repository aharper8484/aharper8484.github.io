import React from "react";
import MainNav from "./MainNav";
import { useState } from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import ProfileImage from "./ProfileImage";

function MainBody(props) {
  const [activeView, setActiveView] = useState("landing");

  return (
    <div>
      <MainNav setActiveIndex={setActiveView}></MainNav>
      <div className="mainContainer">
        <ProfileImage></ProfileImage>
        <div className="mainGrid">
          <Card title="landingContent" contentType={activeView} />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
