import React from "react";
import image1 from "../images/beach-2.webp";
import image2 from "../images/1288609237.webp";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TourCard = () => {
  const tourDetails = [
    {
      title: "Fourteen Days Tour Package",
      Description:
        "This is a fourteen days tour package, if you want to departure in seven days we can arrange that as well",
      image: image2,
      link: "./SevenDaysPackage",
    },
    {
      title: "Beach Staying Tour Package",
      Description:
        "This is a good package for those who want to spend their time at the beach",
      image: image1,
      link: "./BeachStaying",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="py-2 pt-20 font-Montserrat">
      <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
        Hot Tours
      </h1>

      <div className="flex justify-center font-Montserrat items-center py-10">
        <div className="xl:w-3/5 lg:w-4/5 w-11/12 bg-white  overflow-hidden transition">
          {tourDetails.map((items, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="md:flex mt-12 md:border-[2px] font-Montserrat border-gray-200"
            >
              <div className="md:w-1/2 overflow-hidden ">
                <img
                  onClick={() => navigate(items.link)}
                  src={items.image}
                  alt="Benidorm, Spain"
                  className="w-full h-52 md:h-80 object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="w-full md:w-1/2 md:p-14 p-2 md:text-left relative">
                <h2 className="text-[21px] font-medium font-Montserrat">
                  {items.title}
                </h2>
                <div className="flex justify-center md:justify-start items-center my-2"></div>

                <p className="text-gray-600 text-sm mt-[14px] leading-relaxed">
                  {items.Description}
                </p>

                <button
                  className="mt-[25px] font-Montserrat text-base inline-block pt-[17px] pr-[28px] pb-[15px] px-[25px] py-[15px] border-2 border-black text-black font-medium  transition hover:bg-[#01b3a7] hover:border-[#01b3a7]"
                  onClick={() => navigate(items.link)}
                >
                  Check This Tour
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
