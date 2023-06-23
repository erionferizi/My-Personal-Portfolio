import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../assets/background3.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
      HeroImg
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="introimg" />
      </div>
      <div className="content">
        <p>HI. I'M A JUNIOR SOFTWARE DEVELOPER</p>
        <h1>Navision Developer</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
