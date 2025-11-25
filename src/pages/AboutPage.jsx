import React from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import AboutIntro from "../Component/AboutPage/AboutIntro";
import MissionSection from "../Component/AboutPage/MissionSection";
import StatsSection from "../Component/AboutPage/StatsSection";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <AboutIntro />
      <MissionSection />
      <StatsSection />
      <Footer />
    </>
  );
};

export default AboutPage;
