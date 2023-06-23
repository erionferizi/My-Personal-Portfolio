import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContect from "../components/AboutContect";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a Navision Developer" />
      <AboutContect />
      <Footer />
    </div>
  );
};

export default About;
