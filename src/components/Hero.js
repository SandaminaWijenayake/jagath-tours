import React from "react";
import image from "../images/beach-3.jpg";
import image1 from "../images/New folder/edit1.jpg";

const Hero = () => {
  return (
    <>
      <div className="absolute text-white top-1/2  text-5xl font-sans  font-semibold  text-center">
        <p className="text-4xl mb-0">Sri Lanka</p> GENIUS LANKA TOURS HAS OPEN
        DOORS TO WARMLY WELCOME YOU TO ITS COUNTLESS AND REMARKABLE EXPERIENCE
        IN THE PEARL OF INDIAN OCEAN
      </div>
      <div className="h-screen overflow-hidden ">
        <img src={image} alt="" className="" />
      </div>
    </>
  );
};

export default Hero;
