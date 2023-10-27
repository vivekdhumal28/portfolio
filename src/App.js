import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
      <Home />
    </>
  );
}

export default App;
