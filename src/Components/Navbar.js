import Header from "./Header";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

function Navbar() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/project" element={<Project />}>
            Home
          </Route>
          <Route path="/contact" element={<Contact />}>
            About
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
