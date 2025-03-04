import React, { useEffect, useState } from "react";
import sevenDaysTourPackage from "../images/packages/SigriyaTumbnail.jpeg";
import fourDaysTourPackage from "../images/packages/beach-4.png";
import BeachStayingPackage from "../images/packages/beach-5.png";
import { Link, useNavigate } from "react-router-dom";

const sxStyle = {
  backgroundColor: "#fff",
  paddingTop: "75px",
};

const BlogContent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="py-8">
        <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
          Tour Packages
        </h1>
      </div>
      <div className="xl:w-[1200px] xl:h-[420px]  lg:w-[960px] lg:h-[330px] md:w-[720px] md:h-[240px] w-[368px]  m-auto  gap-7 flex-col flex md:flex-row mb-20 font-Montserrat text-xl xl:text-2xl z-30  sm:font-bold">
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/sevenDaysPackage")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={sevenDaysTourPackage}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2  text-white px-4 py-2 text-center w-max">
            Fourteen Days
          </p>
        </div>
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/fourDaysPackage")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={fourDaysTourPackage}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2  text-white px-4 py-2 text-center w-max">
            Four Days
          </p>
        </div>
        <div
          className="md:w-[368px] relative overflow-hidden"
          onClick={() => navigate("/beachStaying")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={BeachStayingPackage}
            alt=""
          />
          <p className="absolute cursor-pointer bottom-5 left-1/2 -translate-x-1/2  text-white px-4 py-2 text-center w-max">
            Beach Holidays
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
