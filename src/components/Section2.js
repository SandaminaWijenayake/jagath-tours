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
    <div className="mt-20 text-center">
      <div className="font-Roboto">3 STEPS TO THE PERFECT TRIP</div>
      <h1 className="text-4xl lg:w-2/5 m-auto my-5 font-Roboto font-semibold text-center">
        FIND TRAVEL PERFECTION WITH THE WISDOM OF EXPERTS
      </h1>
      <p className="w-2/3 m-auto font-manrope">
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

      <Button
        variant="outlined"
        onClick={() => {
          navigate("/PlanningTool");
        }}
      >
        LETS PLAN YOUR TRIP <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default Section2;
