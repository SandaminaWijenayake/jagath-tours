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
  return (
    <div className="w-4/5 m-auto font-Roboto ">
      <div className="py-14 text-center"></div>
      <h1 className="text-4xl sm:text-6xl  font-bold">
        Sri Lanka Holiday & Tour Packages
      </h1>
      <p className="text-xl text-gray-700">
        {/* Our travel guide allows you to discover practical tips and facts about
        all your favorite destinations worldwide. */}
      </p>
      <div className="mt-16 sm:grid md:grid-cols-2 xl:grid-cols-3 sm:p-5 sm:gap-10">
        <Link to="/SevenDaysPackage">
          <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-md transition-transform hover:-translate-y-1  ease-in">
            <img
              class="w-full h-56 object-cover"
              src={sevenDaysTourPackage}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold sm:text-xl text-lg mb-2">
                14 days tour package
              </div>
              <p class="text-gray-700 text-sm lg:text-base line-clamp-3">
                This is a fourteen days tour package, if you want to departure
                in seven days we can arrange that as well
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span> */}
            </div>
          </div>
        </Link>
        {/* <Link to="/fourDaysPackage">
          <div class="max-w-sm rounded overflow-hidden shadow-lg mt-5 sm:mt-0">
            <img
              class="w-full h-56 object-cover"
              src={fourDaysTourPackage}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold sm:text-xl text-lg mb-2">
                4 days tour package
              </div>
              <p class="text-gray-700 text-sm lg:text-base line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </Link> */}
        <Link to="/BeachStaying">
          <div class="max-w-sm rounded overflow-hidden shadow-xl mt-5 sm:mt-0 hover:shadow-md transition-transform hover:-translate-y-1  ease-in">
            <img
              class="w-full h-56 object-cover"
              src={BeachStayingPackage}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div class="font-bold sm:text-xl text-lg mb-2">
                Beach Staying tour package
              </div>
              <p class="text-gray-700 text-sm lg:text-base line-clamp-3">
                This is a good package for those who want to spend their time at
                the beach
              </p>
              <br />
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #beach
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2">
                #summer
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogContent;
