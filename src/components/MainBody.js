import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import ProfileImage from "./ProfileImage";

function MainBody(props) {
  return (
    <div className="mainContainer">
      <ProfileImage></ProfileImage>
      <div className="mainGrid">
        <Card title="Bio" contentType="text" />
      </div>
    </div>
  );
}

export default MainBody;
