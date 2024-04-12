import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Carbon from "../pages/Carbon";
import CarbonCalculator from "./CarbonCalculator";
import Projects from "./Projects";
import TrackInvestments from "./TrackInvestments";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedResources from "./FeaturedResources";
import carbonFooter from "./carbonFooter";
import CarouselComponent from "./CarouselComponent";
import FAQComponent from "./FAQComponent";
import GreenFooter from "../components/GreenFooter";

// Removed destructuring from Banner import as it may cause issues if Banner is exported as default

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <CarouselComponent />
      <CarbonCalculator />
      <Projects />
      <TrackInvestments />
      <About />
      <WhyChooseUs />
      <FeaturedResources />
      <FAQComponent />
      <GreenFooter />
    </>
  );
}
