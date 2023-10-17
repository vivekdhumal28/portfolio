import React from "react";
import "./Experience.css";
import { experienceInfo } from "../constants/Constants";

const Experience = () => {
  return (
    <div className="experience">
      <div className="status-bar">
        {/* Add as many bars as needed for different experiences */}
      </div>
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-item">
        <span className="job-title">Software Developer</span>{" "}
        <span className="company-name">@ Capgemini Engineering</span>
        <p className="date-range">January 2022 to August 2023</p>
        <p className="description">{experienceInfo}</p>
      </div>
    </div>
  );
};

export default Experience;
