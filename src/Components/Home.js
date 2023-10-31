import React from "react";
import profilePic from "../img/ToonmePic.jpeg";
import { GoDownload } from "react-icons/go";
import "./Home.css";
import About from "./About";
import BigScrollText from "./BigScrollText";
import ScrollText from "./ScrollText";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectMain from "./Project/ProjectMain";

const Home = () => {
  const handleDownload = () => {
    const PdfPath = process.env.PUBLIC_URL + "/pdfs/Vivek Dhumal Resume.pdf";
    window.open(PdfPath, "_blank");
  };

  return (
    <>
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
            RESUME {<GoDownload />}
          </button>
        </div>
      </div>
      <div id="about">
        {
          <>
            <BigScrollText collection={"  🔥 KNOW MORE ❤️  🔥 KNOW MORE ❤️ "} />
            <About />
          </>
        }
      </div>
      <div id="project">
        {
          <>
            <BigScrollText collection={" 😍  PROJECT WORK 🫡"} />
            <ProjectMain />
          </>
        }
      </div>
      <div id="contact">
        {
          <>
            <ScrollText />
            <Contact />
            <Footer />
          </>
        }
      </div>
    </>
  );
};

export default Home;
