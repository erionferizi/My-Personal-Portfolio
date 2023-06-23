import "../components/FooterStyle.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            {" "}
            <h4>
              <FaHome
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              {"Rruga Vicianum Arbëri, Prishtina, 10000"}
            </h4>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              {"+383-48-500-027"}
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              {" erion.ferizi@outlook.com"}
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            I'm currently working in Cacttus as a Software Developer for Dynamic
            NAV, I assist in the implementation of Dynamic NAV by working
            closely with the senior team members to gather requirements and
            provide inpput on system configuration.{" "}
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
