import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./Header.css";
import logoImage from "../img/namelogo.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import ScrollText from "./ScrollText";
function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-with-border">
          <img src={logoImage} alt="Your Logo" />

          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-section">
          <div className="location">
            <IoLocationOutline /> Location
          </div>
          <div className="search">
            <AiOutlineSearch /> Search
          </div>
          <button className="hire-button">Hire</button>
        </div>
      </header>
      <div>
        <ScrollText />
      </div>
    </>
  );
}

export default Header;
