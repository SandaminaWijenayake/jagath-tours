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
    <div className="my-40 text-center md:text-sm text-xs text-gray-600 font-light font-Merriweather">
      {/* <div className="font-Roboto">3 STEPS TO THE PERFECT TRIP</div> */}
      <h1 className="md:text-4xl text-xl lg:w-2/5 m-auto my-5  font-semibold text-center  text-blue-900">
        FIND TRAVEL PERFECTION WITH THE WISDOM OF EXPERTS
      </h1>
      <p className="w-2/3 m-auto">
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
        sx={{ marginTop: "15px" }}
        variant="outlined"
        onClick={() => {
          navigate("/planningTool");
        }}
      >
        LETS PLAN YOUR TRIP <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default Section2;
