import React from "react";
import profilePic from "../img/WAPVivek.jpeg";
import "./Home.css";

const Home = () => {
  const handleDownload = () => {
    // Replace 'public/' with the path to your dummy PDF file in the public directory.
    const dummyPdfPath = process.env.PUBLIC_URL + "/dummy_resume.pdf";
    window.open(dummyPdfPath, "_blank");
  };

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={profilePic} alt="Profile"></img>
      </div>
      <div className="text-container">
        <h1 className="large-text">
          Turning Vision Into Reality With Code And Design.{" "}
        </h1>
        <p className="medium-text">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. My expertise in React.js and web
          development.
        </p>
        <button className="download-button" onClick={handleDownload}>
          <i className="fa fa-download"></i> Resume
        </button>
      </div>
    </div>
  );
};

export default Home;
