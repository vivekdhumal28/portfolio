import React from "react";
import { socialImg } from "../importImages";
import "./Footer.css";

const socialLinks = [
  "https://github.com/yourgithub",
  "https://linkedin.com/in/yourlinkedin",
  "https://wa.me/0000000000",
  "mailto:abcd@example.com",
  "tel:+1234567890",
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
