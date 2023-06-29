import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderNav from "./components/HeaderNav";
import App from "./components/App";
import Post from "./components/Post";
import reportWebVitals from "./reportWebVitals";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HeaderNav />
    <App />
    <Post />
    <HeaderNav />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
