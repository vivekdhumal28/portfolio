import React from "react";
import "./SkillsScroll.css";

function SkillsScroll({ skilltext }) {
  return (
    <div className="scrolling-skilltext">
      <div className="scrolling-skilltext-content">{skilltext.repeat(25)} </div>
    </div>
  );
}

export default SkillsScroll;
