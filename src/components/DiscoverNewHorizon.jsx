import React from "react";
import image from "../images/index-3-556x382.jpg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function DiscoverNewHorizon() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["ABOUT US", "WHY CHOOSE US", "OUR MISSION"];
  const navigate = useNavigate();
  return (
    <div className="pt-24 xl:w-[1200px] md:w-[556px] lg:flex-row flex-col lg:w-[960px] font-Montserrat flex m-auto">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="lg:w-1/2   px-3 m-auto"
      >
        <img src={image} alt="" />
      </motion.div>
      <motion.div
        initial={{ x: +50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="lg:w-1/2 px-3 pt-10 lg:pt-0  m-auto"
      >
        <div className="max-w-[470px]">
          <div className="max-w-2xl mx-auto text-center">
            {/* Heading */}
            <h2 className="lg:text-4xl font-semibold text-[28px] lg:font-medium  lg:text-left">
              Discover New Horizons
            </h2>

            {/* Tabs */}
            <div className="flex px-3 lg:px-0 justify-between border-b-2 border-gray-300 mt-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-left py-2 text-lg font-light ${
                    activeTab === index ? "text-[#01b3a7]" : "text-gray-400"
                  } relative transition-all duration-300`}
                >
                  {tab}
                  {activeTab === index && (
                    <div className="w-full h-[2px] bg-[#01b3a7] absolute bottom-0 left-0"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6 text-gray-700 text-center text-sm lg:text-left">
              {activeTab === 0 && (
                <p>
                  Wonder Tour is committed to bringing our clients the best in
                  value and quality travel arrangements. We are passionate about
                  travel and sharing the world's wonders with you.
                </p>
              )}
              {activeTab === 1 && (
                <p>
                  We are proud to offer excellent quality and value for money in
                  our tours, which give you the chance to experience your chosen
                  destination in an authentic and exciting way.
                </p>
              )}
              {activeTab === 2 && (
                <p>
                  Our mission is to provide the ultimate travel planning
                  experience while becoming a one-stop shop for every travel
                  service available in the industry.
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex justify-center lg:justify-left gap-4">
              <button
                onClick={() => navigate("/Contact_us")}
                className="bg-[#01b3a7] text-white px-6 py-3 font-medium border-2 border-[#01b3a7] hover:border-black hover:bg-white hover:text-black"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate("About_us")}
                className="border-2 border-black text-black px-6 py-3 hover:bg-[#01b3a7] hover:border-[#01b3a7] font-medium"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DiscoverNewHorizon;
