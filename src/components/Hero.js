import React from "react";
import image from "../images/beach-3.jpg";
import image1 from "../images/New folder/edit1.jpg";

const Hero = () => {
  return (
    <>
      <div className="px-5 absolute text-white top-1/3 sm:top-1/2 text-2xl lg:text-5xl font-Roboto  font-bold  text-center">
        <p className="text-4xl mb-0">Sri Lanka</p> GENIUS LANKA TOURS HAS OPEN
        DOORS TO WARMLY WELCOME YOU TO ITS COUNTLESS AND REMARKABLE EXPERIENCE
        IN THE PEARL OF INDIAN OCEAN
      </div>
      <div className="h-screen overflow-hidden mt-14 w-full">
        <img src={image} alt="" className="h-screen object-cover w-full" />
      </div>
    </>
  );
};

export default Hero;
