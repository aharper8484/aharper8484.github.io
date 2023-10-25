import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import ProfileImage from "./ProfileImage";
// import { useState } from "react";
import "./MainNav.css";
import "./CardToggle";

function MainBody(props) {
  // const [activeView, setActiveView] = useState("landing");

  // function toggleMainView(a) {
  //   setActiveView(a);
  // }

  return (
    <div>
      <div className="mainContainer">
        <ProfileImage></ProfileImage>
        <div className="mainGrid">
          <Card title="landingContent" contentType="landing" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
