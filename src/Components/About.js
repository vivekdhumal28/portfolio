import React from "react";
import AboutMain from "./About/AboutMain";
import ScrollTextTag from "./ScrollTextTag";
import Carousel from "./Carousel";
import Experience from "./Experience";
import Education from "./Education";

const About = () => {
  return (
    <div>
      <AboutMain />
      <ScrollTextTag />
      <Carousel />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
