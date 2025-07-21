import React, { useEffect } from "react";
import SriLanka from "./SriLanka";
import Blogs from "./Blogs";

import Hero from "./Hero";
import OurServices from "./OurServices";
import TourCard from "./TourCard";
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
