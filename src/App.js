import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import BigScrollText from "./Components/BigScrollText";
import About from "./Components/About";

import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import ScrollText from "./Components/ScrollText";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <BigScrollText collection={"  🔥 KNOW MORE ❤️  🔥 KNOW MORE ❤️ "} />
      <About />
      <BigScrollText collection={" 😍  PROJECT WORK 🫡"} />
      <Project />
      <ScrollText />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
