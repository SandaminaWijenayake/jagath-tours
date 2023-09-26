import React from "react";
import bycicle from "../images/section2_images/bicycle-transformed.jpeg";
import girl from "../images/section2_images/girl-transformed.jpeg";
import travel from "../images/section2_images/travel_guy-transformed.jpeg";

const Section2 = () => {
  return (
    <div className="mt-20 text-center">
      <div className="">3 STEPS TO THE PERFECT TRIP</div>
      <h1 className="text-4xl w-2/5 m-auto my-5">
        FIND TRAVEL PERFECTION WITH THE WISDOM OF EXPERTS
      </h1>
      <p className="w-2/3 m-auto">
        Naturally head of the class when is comes to luxury travel planning.
        because we do more work then anyone else, with a few lettle sweeteners
        thrown in! travel to four corners of the Sri lanka without going around
        in cercles.
      </p>
      <div className="flex justify-around w-8/12 m-auto">
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
      <button className="bg-blue-400 w-52 h-11 align-middle text-center text-white rounded-md">
        LETS PLAN YOUR TRIP
      </button>
    </div>
  );
};

export default Section2;
