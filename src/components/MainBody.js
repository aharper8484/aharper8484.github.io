import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import profile from "../assets/profile.jpeg";

function MainBody() {
  return (
    <div className="mainContainer">
      <div className="mainGrid">
        <Card title="Image" contentType="image" image={profile} />
        <Card title="Bio" contentType="text" />
        <Card title="Skills" contentType="text" />

        <Card title="Timeline" contentType="text" />
        <Card title="Links" contentType="text" />
        <Card title="Socials" contentType="text" />
      </div>
    </div>
  );
}

export default MainBody;
