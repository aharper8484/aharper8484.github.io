import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Post from "./components/Post";
import Navbar from "./components/navbar";
import reportWebVitals from "./reportWebVitals";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Post />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
