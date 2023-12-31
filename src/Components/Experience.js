import React from "react";
import "./Experience.css";
import { experienceInfo } from "../constants/Constants";

const Experience = () => {
  return (
    <div className="experience">
      <div className="status-bar"></div>
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-item">
        <span className="job-title">Software Developer</span>{" "}
        <span className="company-name">@ Capgemini Engineering</span>
        <p className="date-range">April 2021 to Present</p>
        <p className="description">{experienceInfo}</p>
      </div>
    </div>
  );
};

export default Experience;
