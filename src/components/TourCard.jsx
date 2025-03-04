import React from "react";
import image1 from "../images/beach-2.jpeg";
import image2 from "../images/1288609237.jpg";
import { Link, useNavigate } from "react-router-dom";

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
          {/* Image Section */}
          {tourDetails.map((items, index) => (
            <div
              key={index}
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
                <div className="flex justify-center md:justify-start items-center my-2">
                  {/* <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span> */}
                  {/* <span className="text-gray-500 text-sm ml-2">
                4 customer reviews
            </span> */}
                </div>

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
