import React from "react";
import Section1 from "./Section1";
import SriLanka from "./SriLanka";
import Blogs from "./Blogs";
import Section2 from "./Section2";
import Accodion from "./Accodion";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Section1 />
      <SriLanka />
      <Blogs />
      <Section2 />
      <Accodion />
    </>
  );
};

export default Home;
