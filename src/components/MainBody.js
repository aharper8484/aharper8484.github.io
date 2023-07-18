import React from "react";
import MainNav from "./MainNav";
import { useState } from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import ProfileImage from "./ProfileImage";

function MainBody(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <MainNav setActiveIndex={setActiveIndex}></MainNav>
      <div className="mainContainer">
        <ProfileImage></ProfileImage>
        <div className="mainGrid">
          <Card title="landingContent" contentType={activeIndex} />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
