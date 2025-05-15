import React from "react";
import image from "../images/parallax-1-1920x850.webp";
import { useNavigate } from "react-router-dom";

function FirstClassImpression() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[850px] overflow-hidden pt-[120px] font-Montserrat ">
      <img
        className="w-full h-full object-cover brightness-75"
        src={image}
        alt=""
      />
      <div className="absolute inset-0 flex lg:w-3/5 xl:w-2/5 w-4/5 m-auto flex-col items-center font-normal justify-center text-center z-10 text-white">
        <div className="text-5xl ">
          First-class Impressions are Waiting for You!
        </div>
        <p className=" max-w-2xl mt-4 text-sm">
          Our agency offers travelers various tours and excursions with
          destinations all over the world. Browse our website to find your dream
          tour!
        </p>
        <button
          onClick={() => navigate("./packages")}
          className="mt-[25px] font-Montserrat text-base inline-block pt-[17px] pr-[28px] pb-[15px] px-[25px] py-[15px] bg-[#01b3a7] border-2 border-[#01b3a7] text-white font-medium  transition hover:bg-transparent hover:border-white"
        >
          Book a Tour Now
        </button>
      </div>
    </div>
  );
}

export default FirstClassImpression;
