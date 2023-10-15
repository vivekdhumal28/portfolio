import React from "react";
import "./ScrollText.css";

function ScrollText({ text }) {
  return (
    <div className="scrolling-text">
      <div className="scrolling-text-content">
        {"* * Open To Work * *".repeat(70)}{" "}
      </div>
    </div>
  );
}

export default ScrollText;
