import "./HeaderNav.css";
import githubIcon from "../assets/github-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import resumeIcon from "../assets/resume-icon.png";

function HeaderNav(props) {
  return (
    <div className="navbar">
      <div className="navLogoContainer">
        <img src={props.logo} alt="" className="navLogo"></img>
      </div>
      <div className="navIconContainer">
        <img src={githubIcon} alt="" className="navIcon" id="github"></img>
        <img src={linkedinIcon} alt="" className="navIcon" id="linkedin"></img>
        <img src={resumeIcon} alt="" className="navIcon" id="resume"></img>
      </div>
    </div>
  );
}

export default HeaderNav;
