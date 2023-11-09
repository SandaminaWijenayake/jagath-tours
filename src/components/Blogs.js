import React from "react";
import beach_2 from "../images/beach-2.jpeg";
import beach_3 from "../images/beach-3.jpg";
import elephant from "../images/elephant.jpg";
import train from "../images/train.jpeg";
import perahara from "../images/perahara.png";
import oruva from "../images/photosgeniuslankatours/sigiriya/sigiriya_boat_ride.jpg";
import watar_rift from "../images/New folder/activity_4.jpg";

const Blogs = () => {
  return (
    <div className="w-4/5 m-auto mt-32 ">
      <div className="text-center"></div>
      <h1 className="text-4xl font-Roboto font-semibold text-center my-5">
        POPULAR DESTINATIONS TO GO
      </h1>
      <p className="text-center font-manrope">
        You are the type of person who wants to take amazing unique
        vacations-the kink where luxury meets authentic, and each experience
        above all else and are differentiated by serving their needs first - we
        want to make their hectic and stressful lives easier by enabling them to
        forcus on enjoying their vacation and ensuring they get the most.
      </p>
      <div className="lg:grid lg:grid-flow-row grid-cols-3 lg:gap-5 mt-10">
        <div className="col-span-2 row-span-2">
          <img src={beach_3} alt="" className="h-full rounded-md" />
        </div>
        <div className="row-span-2">
          <img
            src={beach_2}
            alt=""
            className="h-full rounded-md mt-2 lg:mt-0"
          />
        </div>
        <div className="">
          <img src={oruva} alt="" className="h-full rounded-md mt-2 lg:mt-0" />
        </div>
        <div className="">
          <img
            src={elephant}
            alt=""
            className="h-full rounded-md mt-2 lg:mt-0"
          />
        </div>
        <div className="">
          <img
            src={perahara}
            alt=""
            className="sm:h-full h-60 object-cover rounded-md mt-2 lg:mt-0"
          />
        </div>
        <div className="">
          <img
            src={train}
            alt=""
            className="sm:h-full h-60 object-cover rounded-md mt-2 lg:mt-0"
          />
        </div>{" "}
        <div className="col-span-2">
          <img
            src={watar_rift}
            alt=""
            className="sm:h-full h-52 object-cover rounded-md mt-2 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
