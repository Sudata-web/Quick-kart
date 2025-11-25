import React from "react";
import HeroSection from "../Component/Homepage/HeroSection";
import ProductSection from "../Component/Homepage/ProductSection";
import FeaturedSection from "../Component/Homepage/FeaturedSection";
import GamingBanner from "../Component/Homepage/GamingBanner";
import SubscribeSection from "../Component/Homepage/SubscribeSection";
import Footer from "../Layout/Footer";
import NavBar from "../Layout/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProductSection />
      <FeaturedSection />
      <GamingBanner />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default HomePage;
