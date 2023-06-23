import "./AboutContentStyle.css";
import background2 from "../assets/background2.jpg";
import { Link } from "react-router-dom";
import React1 from "../assets/projects.jpg";
import React2 from "../assets/projects.jpg";
import React from "react";

export const AboutContect = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          {" "}
          I'm a Navision Developer. I work in a microsoft platform called
          Dynamic Navision.
        </p>
        <Link to="/project" className="btn">
          PROJECTS
        </Link>
        <a
          className="downloadButton"
          href="Erion-Ferizi-CV.pdf"
          download="ErionFerizi-CV.pdf"
        >
          <button>DOWNLOAD MY CV</button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="just a picture"></img>
          </div>

          <div className="img-stack bottom">
            <img src={React2} className="img" alt="just a picture"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContect;
