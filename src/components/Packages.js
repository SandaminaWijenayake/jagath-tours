import React, { useEffect, useState } from "react";
import sevenDaysTourPackage from "../images/packages/SigriyaTumbnail.jpeg";
import fourDaysTourPackage from "../images/packages/beach-4.png";
import BeachStayingPackage from "../images/packages/beach-5.png";
import { Link } from "react-router-dom";

const sxStyle = {
  backgroundColor: "#fff",
  paddingTop: "75px",
};

const BlogContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-9/12 m-auto font-Merriweather ">
      <div className="py-14 text-center"></div>
      <h1 className="text-4xl sm:text-4xl  font-bold text-center md:text-left">
        Sri Lanka holiday & tour packages
      </h1>
      <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 sm:p-5 sm:gap-10 h-auto">
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-md transition-transform hover:-translate-y-1  ease-in flex-grow">
          <Link to="/SevenDaysPackage">
            <img
              className="w-full h-56 object-cover"
              src={sevenDaysTourPackage}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold sm:text-lg  mb-2">
                Fourteen days tour package
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">
                This is a fourteen days tour package, if you want to departure
                in seven days we can arrange that as well
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span> */}
            </div>
          </Link>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5 sm:mt-0 hover:shadow-md transition-transform hover:-translate-y-1  ease-in flex-grow relative">
          <Link to="/BeachStaying">
            <img
              className="w-full h-56 object-cover"
              src={BeachStayingPackage}
              alt="mountains"
            />
            <div className="px-6 py-4 md:h-full">
              <div className="font-bold sm:text-lg mb-2">
                Beach staying tour package
              </div>
              <p className="text-gray-700 text-sm line-clamp-3 overflow-hidden">
                This is a good package for those who want to spend their time at
                the beach
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 md:absolute md:bottom-0 md:left-0 w-full">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #beach
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #summer
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
