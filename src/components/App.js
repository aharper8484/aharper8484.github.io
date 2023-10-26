import { useState } from "react";
import "./App.css";
import "../index.css";
import HeaderNav from "../components/HeaderNav";
import MainBody from "../components/MainBody";
import headerLogo from "../assets/logo-fullName.png";

function App() {
  const [contentType, setContentType] = useState("landing");

  return (
    <div className="App">
      <HeaderNav logo={headerLogo} handleNav={setContentType} />
      <MainBody contentType={contentType} />
    </div>
  );
}

export default App;
