import React from "react";
import "./AboutMain.css";
import vivekPic from "../../img/Vivek-Picture.png";
import { info } from "../../constants/Constants";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="heading">Passion Fuels Purpose!</h1>
      <div className="content">
        <div className="left">
          <h2>BIOGRAPHY</h2>
          <p>{info}</p>
        </div>
        <div className="middle">
          <img src={vivekPic} alt=""></img>
        </div>
        <div className="right">
          <div className="info">
            <div className="row">
              <div className="number">3+</div>
              <div className="label">Satisfied Clients</div>
            </div>
            <div className="row">
              <div className="number">04</div>
              <div className="label">Projects</div>
            </div>
            <div className="row">
              <div className="number">2.6+</div>
              <div className="label">Years Of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
