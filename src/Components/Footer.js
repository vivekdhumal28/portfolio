import React from "react";
import "./Footer.css"; // Import your CSS file

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
        <a href="https://github.com/yourgithub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourlinkedin">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://wa.me/yourwhatsappnumber">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:youremail@example.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="tel:+1234567890">
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
