import React from "react";
import { socialImg } from "../importImages";
import "./Footer.css";

const socialLinks = [
  "https://github.com/vivekdhumal28",
  "https://https://www.linkedin.com/in/vivek-dhumal-967351194",
  "https://wa.me/7558507250",
  "mailto:vivekdhumal.28@gmail.com",
  "tel:+919518958782",
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <p>2023 © All rights reserved</p>
      </div>
      <div className="middle-section">
        <p>
          Build by{" "}
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          vivekdhumal28
        </p>
      </div>
      <div className="right-section">
        {socialImg.map((image, index) => (
          <a key={index} href={socialLinks[index]}>
            <img src={image} alt={`Icon ${index + 1}`} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
