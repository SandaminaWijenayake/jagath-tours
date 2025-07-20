import React from "react";
import image from "../images/photosgeniuslankatours/srilanka-tour-map.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SriLanka = () => {
  return (
    <div className="xl:w-3/5 m-auto  font-Merriweather w-11/12 md:text-base text-xs lg:leading-7 text-gray-600 font-light">
      <div className="xl:flex lg:gap-10 font-Raleway items-center pt-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="xl:w-6/12"
        >
          <h1 className="sm:text-[36px] text-[28px] text-left font-semibold font-Montserrat my-2">
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
        </motion.div>

        <motion.div
          initial={{ x: +50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="xl:w-6/12 flex justify-center mt-10 xl:mt-0"
        >
          <img
            src={image}
            alt="Sri Lanka Map"
            className="rounded-md w-full max-w-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SriLanka;
