import "./App.css";
import "../index.css";
import HeaderNav from "../components/HeaderNav";
import MainBody from "../components/MainBody";
import headerLogo from "../assets/logo-fullName.png";

function App() {
  return (
    <div className="App">
      <HeaderNav logo={headerLogo} />
      <MainBody />
    </div>
  );
}

export default App;
