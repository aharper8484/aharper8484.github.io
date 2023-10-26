import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import ProfileImage from "./ProfileImage";
import "./MainNav.css";
import "./CardToggle";

function MainBody(props) {
  return (
    <div>
      <div className="mainContainer">
        <ProfileImage></ProfileImage>
        <div className="mainGrid">
          <Card title="landingContent" contentType={props.contentType} />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
