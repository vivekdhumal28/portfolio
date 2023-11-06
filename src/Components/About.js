import React from "react";
import AboutMain from "./About/AboutMain";
import ScrollTextTag from "./ScrollTextTag";
import Carousel from "./Carousel";
import Experience from "./Experience";
import Education from "./Education";
import SkillsScroll from "./Project/SkillsScroll";

const About = () => {
  return (
    <div>
      <AboutMain />
      <ScrollTextTag myText={" My Skills "} />
      <SkillsScroll skilltext={`🧑‍💻 💼  🧠  🧑‍💻 ✌️ 🎓`} />
      <Carousel />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
