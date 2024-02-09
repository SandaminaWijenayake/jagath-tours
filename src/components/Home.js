import React from "react";
import Section1 from "./Section1";
import SriLanka from "./SriLanka";
import Blogs from "./Blogs";
import Section2 from "./Section2";
import Accodion from "./Accodion";
import Footer from "./Footer";
import Hero from "./Hero";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <SriLanka />
      <OurServices />
      <Blogs />
      <Section2 />
      {/* <Accodion /> */}
    </>
  );
};

export default Home;
