import React from "react";
import image from "../images/photosgeniuslankatours/srilanka-tour-map.webp";
import image1 from "../images/New folder/lep.png";
import image3 from "../images/New folder/lepperd.jpg";
import image4 from "../images/New folder/yala-2.jpeg";

//activity
import activity_1 from "../images/New folder/activity_1.jpg";
import activity_2 from "../images/New folder/Activity_2.jpg";
import activity_3 from "../images/New folder/Activity_3.jpg";
import activity_4 from "../images/New folder/activity_4.jpg";

//cuisines
import cuisines_1 from "../images/Cuisines/food.png";
import cuisines_2 from "../images/Cuisines/fresh-fruits.png";
import cuisines_3 from "../images/Cuisines/image.jpg";
import cuisines_4 from "../images/Cuisines/seafood.png";
// import cuisines_5 from "../images/Cuisines/tea.jpg";

import Lottie from "lottie-react";
import animationData from "../images/svg/Animation - 1698640438657.json";
import animationData2 from "../images/svg/Animation - 1698641345767.json";
import { Link } from "react-router-dom";

const SriLanka = () => {
  return (
    <div className="xl:w-3/5 m-auto  font-Merriweather w-11/12 md:text-base text-xs lg:leading-7 text-gray-600 font-light">
      {/* Absolute Header */}
      {/* Main Content */}
      <div className="xl:flex lg:gap-10 font-Raleway items-center pt-10">
        {/* Left Side - Text Content */}
        <div className="xl:w-6/12">
          <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat my-2">
            What is Sri Lanka?
          </h1>
          <p className="mt-10 text-justify text-sm leading-6 md:leading-6">
            Sri Lanka, officially the Democratic Socialist Republic of Sri
            Lanka, is an island country located to the southeast of India. Being
            a democracy, free elections are held every five years to choose a
            president and its government. In ancient times, it was known by
            different names. The Greek travelers called it Taprobana, and the
            Arabs called it Serendib. Before independence in 1948, it was called
            Ceylon.
          </p>

          {/* Button with Arrow Animation */}
          <Link to="/AboutSriLanka">
            <button className="mt-5 text-black font-semibold flex items-center gap-2 group">
              <span className="group-hover:underline">
                Read More About Sri Lanka
              </span>
              <span className="transition-transform group-hover:translate-x-1 group-hover:no-underline">
                →
              </span>
            </button>
          </Link>
        </div>

        {/* Right Side - Map Image */}
        <div className="xl:w-6/12 flex justify-center mt-10 xl:mt-0">
          <img
            src={image}
            alt="Sri Lanka Map"
            className="rounded-md w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SriLanka;
