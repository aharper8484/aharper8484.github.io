import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import profilePhoto from "../assets/profile-photo.jpg";

function MainBody(props) {
  return (
    <div className="mainContainer">
      <div className="mainGrid">
        <Card
          title="Image"
          contentType="image"
          image={profilePhoto}
          id="profileImage"
        />
        <Card title="Bio" contentType="text" />
      </div>
    </div>
  );
}

export default MainBody;
