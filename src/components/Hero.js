import React from "react";
import image from "../images/beach-3.jpg";
import image1 from "../images/How-long-to-spend-in-Sri-Lanka-2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="px-5 absolute top-1/4 sm:top-1/3 text-2xl lg:text-2xl md:right-1/3 font-Roboto sm:w-6/12 w-full font-normal sm:text-left text-white text-center">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl md:text-7xl mb-0 font-bold font-serif"
        >
          Sri Lanka
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1 }}
          className="text-base lg:text-2xl font-Roboto"
        >
          Genius lanka tours has open doors to warmly welcome you to its
          countless and remarkable experience in the pearl of indian ocean
        </motion.div>
        <Link to="/Planning">
          <motion.button
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Choose plan
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </motion.button>
        </Link>
      </div>

      <div
        className="min-h-screen overflow-hidden  w-full bg-center bg-fixed  bg-blend-overlay bg-black/10"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image1})`,
        }}
      >
        {/* <img
          src={image}
          alt=""
          className="h-screen object-cover w-full bg-fixed bg-center bg-blend-overlay bg-black/20"
        /> */}
      </div>
    </>
  );
};

export default Hero;
