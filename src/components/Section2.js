import React from "react";
import bycicle from "../images/section2_images/bicycle-transformed.jpeg";
import girl from "../images/section2_images/girl-transformed.jpeg";
import travel from "../images/section2_images/travel_guy-transformed.jpeg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <div className="xl:w-3/5 w-full m-auto py-2 mt-20 font-Montserrat">
      <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
        FIND TRAVEL PERFECTION WITH THE WISDOM OF EXPERTS
      </h1>
      <p className="text-gray-700 max-w-4xl font-Montserrat  text-center text-base lg:text-lg mx-auto mt-3 mb-16">
        Naturally head of the class when is comes to luxury travel planning.
        because we do more work then anyone else, with a few lettle sweeteners
        thrown in! travel to four corners of the Sri lanka without going around
        in cercles.
      </p>
      <div className="hidden sm:flex sm:justify-around sm:w-8/12 m-auto">
        <div>
          <img src={bycicle} alt="" className="w-56" />
        </div>
        <div>
          <img src={girl} alt="" className="w-56" />
        </div>
        <div>
          <img src={travel} alt="" className="w-56" />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-4  m-auto font-Montserrat text-base inline-block pt-[17px] pr-[28px] pb-[15px] pl-[28px] py-2 border-2 border-black text-black font-medium  transition hover:bg-black hover:text-white"
          onClick={() => navigate("./planningTool")}
        >
          Let's Plan Your Trip
        </button>
      </div>
    </div>
  );
};

export default Section2;
