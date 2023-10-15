import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import ScrollTextTag from "./Components/ScrollTextTag";
import BigScrollText from "./Components/BigScrollText";
import About from "./Components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <BigScrollText />
      <About />
      <ScrollTextTag />
    </>
  );
}

export default App;
