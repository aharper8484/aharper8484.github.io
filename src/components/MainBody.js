import React from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import profilePhoto from "../assets/profile-photo.jpg";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import resumeIcon from "../assets/resume-icon.png";

function MainBody() {
  return (
    <div className="mainContainer">
      <div className="mainGrid">
        <Card title="Image" contentType="image" image={profilePhoto} />
        <Card title="Bio" contentType="text" />
        <Card title="Skills" contentType="text" />

        <Card title="Timeline" contentType="text" />
        <Card title="Links" contentType="text" />
        <Card
          title="Linkage"
          contentType="linkage"
          githubIcon={githubIcon}
          linkedinIcon={linkedinIcon}
          resumeIcon={resumeIcon}
        />
      </div>
    </div>
  );
}

export default MainBody;
