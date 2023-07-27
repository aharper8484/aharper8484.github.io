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
        <a href="https://github.com/aharper8484" target="__blank">
          <img src={githubIcon} alt="" className="navIcon" id="github"></img>
        </a>
        <a href="https://www.linkedin.com/in/adamharper8484/" target="__blank">
          <img
            src={linkedinIcon}
            alt=""
            className="navIcon"
            id="linkedin"
          ></img>
        </a>
        <a href="../assets/adamHarperCV.pdf" download="adamHarperCV">
          <img src={resumeIcon} alt="" className="navIcon" id="resume"></img>
        </a>
      </div>
    </div>
  );
}

export default HeaderNav;
