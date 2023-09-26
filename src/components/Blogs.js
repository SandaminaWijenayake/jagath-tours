import React from "react";
import beach_1 from "../images/beach-1.jpg";
import beach_2 from "../images/beach-2.jpeg";
import beach_3 from "../images/beach-3.jpg";
import elephant from "../images/elephant.jpg";
import oruva from "../images/oruva.jpg";
import train from "../images/train.jpeg";
import perahara from "../images/perahara.png";
import sigiriya from "../images/sigiriya.jpg";
import watar_rift from "../images/water-rifting.jpg";

const Blogs = () => {
  return (
    <div className="w-4/5 m-auto mt-20">
      <h1 className="font-bold text-6xl">Popular Destinations</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-5 mt-10">
        <div className="bg-red-200 col-span-2 row-span-2">
          <img src={beach_3} alt="" className="h-full" />
        </div>
        <div className="bg-red-300 row-span-2">
          <img src={beach_2} alt="" className="h-full" />
        </div>
        <div className="bg-red-400">
          <img src={oruva} alt="" className="h-full" />
        </div>
        <div className="bg-red-600">
          <img src={elephant} alt="" className="h-full" />
        </div>
        <div className="bg-red-800">
          <img src={perahara} alt="" className="h-full" />
        </div>
        <div className="bg-red-800">
          <img src={train} alt="" className="h-full" />
        </div>{" "}
        <div className="bg-red-800 col-span-2">
          <img src={watar_rift} alt="" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
