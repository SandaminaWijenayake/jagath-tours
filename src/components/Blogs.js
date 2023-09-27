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
    <div className="w-4/5 m-auto mt-32">
      <div className="text-center"></div>
      <h1 className="text-4xl text-center my-5">POPULAR DESTINATIONS TO GO</h1>
      <p className="text-center">
        You are the type of person who wants to take amazing unique
        vacations-the kink where luxury meets authentic, and each experience
        above all else and are differentiated by serving their needs first - we
        want to make their hectic and stressful lives easier by enabling them to
        forcus on enjoying their vacation and ensuring they get the most.
      </p>
      <div className="grid grid-flow-row grid-cols-3 gap-5 mt-10">
        <div className="col-span-2 row-span-2">
          <img src={beach_3} alt="" className="h-full rounded-xl" />
        </div>
        <div className="row-span-2">
          <img src={beach_2} alt="" className="h-full rounded-xl" />
        </div>
        <div className="">
          <img src={oruva} alt="" className="h-full rounded-xl" />
        </div>
        <div className="">
          <img src={elephant} alt="" className="h-full rounded-xl" />
        </div>
        <div className="">
          <img src={perahara} alt="" className="h-full rounded-xl" />
        </div>
        <div className="">
          <img src={train} alt="" className="h-full rounded-xl" />
        </div>{" "}
        <div className="col-span-2">
          <img src={watar_rift} alt="" className="h-full rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
