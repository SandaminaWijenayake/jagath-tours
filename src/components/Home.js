import React, { useEffect } from "react";
import Section1 from "./Section1";
import SriLanka from "./SriLanka";
import Blogs from "./Blogs";
import Section2 from "./Section2";
import Accodion from "./Accodion";
import Footer from "./Footer";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Intro from "./Intro";
import TourCard from "./TourCard";
import TimeLine from "./TimeLine";
import FirstClassImpression from "./FirstClassImpression";
import QuickTour from "./QuickTour";
import DiscoverNewHorizon from "./DiscoverNewHorizon";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      {/* <Section1 /> */}
      <QuickTour />
      {/* <Intro /> */}
      <SriLanka />
      <DiscoverNewHorizon />
      <OurServices />
      {/* <TimeLine /> */}
      <TourCard />
      <Blogs />
      <FirstClassImpression />
      {/* <Section2 /> */}
      {/* <Accodion /> */}
    </>
  );
};

export default Home;
