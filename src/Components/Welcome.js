import React from "react";
import JuanPic from "../Juan.jpg";
import "../App.css";

export default function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={JuanPic} alt="logo" />
        <p>juan lucero</p>
        <p>SENIOR WEB DEVELOPER</p>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1vtnCZfCtNnSOT1nFXd_WWVPRjaHRHmDS/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
    </div>
  );
}
