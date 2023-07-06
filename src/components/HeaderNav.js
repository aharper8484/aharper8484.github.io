import "./HeaderNav.css";

function HeaderNav(props) {
  return (
    <div className="navbar">
      <img src={props.logo} alt="" className="navLogo"></img>
    </div>
  );
}

export default HeaderNav;
