import React from "react";
import { useState } from "react";
import "./MainBody.css";
import "./CardToggle";
import Card from "./Card";
import ProfileImage from "./ProfileImage";
import "./MainNav.css";
import "./CardToggle";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function MainBody(props) {
  const [activeView, setActiveView] = useState("landing");

  function toggleMainView(a) {
    setActiveView(a);
  }

  return (
    <div>
      <div className="mainNavContainer">
        <div className="mainNavGrid">
          <div
            id="bio"
            className="mainNavLink"
            onClick={() => toggleMainView("bio")}
          >
            <ReactMarkdown># Bio</ReactMarkdown>
          </div>
          <div
            id="timeline"
            className="mainNavLink"
            onClick={() => toggleMainView("timeline")}
          >
            <ReactMarkdown># Timeline</ReactMarkdown>
          </div>
          <div
            id="links"
            className="mainNavLink"
            onClick={() => toggleMainView("links")}
          >
            <ReactMarkdown># Links</ReactMarkdown>
          </div>
          <div
            id="blog"
            className="mainNavBlog"
            onClick={() => toggleMainView("blog")}
          >
            <ReactMarkdown># Blog</ReactMarkdown>
          </div>
        </div>
      </div>
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
