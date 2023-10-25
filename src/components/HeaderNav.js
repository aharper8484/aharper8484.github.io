import "./HeaderNav.css";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import resumeIcon from "../assets/resume-icon.png";
import cvLink from "../assets/adamHarperCV.pdf";
import React from "react";
// import { useState } from "react";
import "./MainBody.css";
import "./CardToggle";
import "./MainNav.css";
import "./CardToggle";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function HeaderNav(props) {
  // const [activeView, setActiveView] = useState("landing");

  // function toggleMainView(a) {
  //   setActiveView(a);
  // }

  return (
    <div className="navbar">
      <div className="navLogoContainer">
        <a href="/">
          <img src={props.logo} alt="" className="navLogo"></img>
        </a>
      </div>
      <div class="navBlock">
        <div className="mainNavContainer">
          <div
            id="bio"
            className="mainNavLink"
            // onClick={() => toggleMainView("bio")}
          >
            <ReactMarkdown># Bio</ReactMarkdown>
          </div>
          <div
            id="timeline"
            className="mainNavLink"
            // onClick={() => toggleMainView("timeline")}
          >
            <ReactMarkdown># Timeline</ReactMarkdown>
          </div>
        </div>
        <div className="navIconContainer">
          <a href="https://github.com/aharper8484" target="__blank">
            <img src={githubIcon} alt="" className="navIcon" id="github"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/adamharper8484/"
            target="__blank"
          >
            <img
              src={linkedinIcon}
              alt=""
              className="navIcon"
              id="linkedin"
            ></img>
          </a>
          <a href={cvLink} download="adamHarperCV">
            <img src={resumeIcon} alt="" className="navIcon" id="resume"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
