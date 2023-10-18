/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect } from "react";
import "./BigScrollText.css";

const BigScrollText = ({ collection }) => {
  useEffect(() => {
    const marquee = document.getElementById("scrolling-text-marquee-big");
    marquee.addEventListener("end", () => {
      marquee.style.animation = "none";
      setTimeout(() => {
        marquee.style.animation = "scroll 10s linear infinite";
      }, 0);
    });
  }, []);

  return (
    <div className="scrolling-text-container_big">
      <marquee
        behavior="scroll"
        direction="left"
        id="scrolling-text-marquee-big"
      >
        {collection.repeat(20)}
      </marquee>
    </div>
  );
};

export default BigScrollText;
