/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect } from "react";
import "./ScrollTextTag.css";

const ScrollTextTag = ({ myText }) => {
  useEffect(() => {
    const marquee = document.getElementById("scrolling-text-marquee");
    marquee.addEventListener("end", () => {
      marquee.style.animation = "none";
      setTimeout(() => {
        marquee.style.animation = "scroll 10s linear infinite";
      }, 0);
    });
  }, []);

  return (
    <div className="scrolling-text-container">
      <marquee behavior="scroll" direction="right" id="scrolling-text-marquee">
        {myText.repeat(25)}
      </marquee>
    </div>
  );
};

export default ScrollTextTag;
