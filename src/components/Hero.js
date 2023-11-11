import React from "react";
import image from "../images/beach-3.jpg";
import image1 from "../images/How-long-to-spend-in-Sri-Lanka-2.jpg";

const Hero = () => {
  return (
    <>
      <div className="px-5 absolute top-1/4 sm:top-1/3 text-2xl lg:text-2xl md:right-1/3 font-Roboto sm:w-6/12 w-full font-normal sm:text-left text-white text-center">
        <p className="text-4xl md:text-7xl mb-0 font-bold font-serif">
          Sri Lanka
        </p>
        <div className="text-base md:text-2xl font-manrope">
          Genius lanka tours has open doors to warmly welcome you to its
          countless and remarkable experience in the pearl of indian ocean
        </div>
        <button className="bg-blue-600 w-52 h-11 align-middle text-center text-white rounded-md mt-5 font-Roboto text-base">
          PLAN YOUR TRIP
        </button>
      </div>

      <div
        className="min-h-screen overflow-hidden  w-full bg-center bg-fixed  bg-blend-overlay bg-black/10"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image1})`,
        }}
      >
        {/* <img
          src={image}
          alt=""
          className="h-screen object-cover w-full bg-fixed bg-center bg-blend-overlay bg-black/20"
        /> */}
      </div>
    </>
  );
};

export default Hero;
