import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import ScrollTextTag from "./Components/ScrollTextTag";
import BigScrollText from "./Components/BigScrollText";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Experience from "./Components/Experience";
import Education from "./Components/Education";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <BigScrollText collection={"  🔥 KNOW MORE ❤️  🔥 KNOW MORE ❤️ "} />
      <About />
      <ScrollTextTag />
      <Carousel />
      <Experience />
      <Education />
      <BigScrollText collection={" 😍  COLLECTION 🫡"} />
    </>
  );
}

export default App;
