import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";
const onHover = {
  ":hover": { color: "#01b3a7" },
};

const Footer = () => {
  return (
    <div className="bg-[#162E43] h-full  text-white font-Montserrat md:text-base text-xs">
      <div className="md:flex w-11/12 lg:w-10/12 m-auto overflow-hidden py-16">
        <div className="w-full sm:flex md:w-2/3">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            whileInView={{ x: 0, opacity: 1 }}
            className="sm:w-1/2   text-sm leading-9 text-left"
          >
            <h1 className="text-base font-semibold text-left  mb-8">
              CONTACT US
            </h1>
            <p className=" hover:text-[#01b3a7]">
              <LocalPhoneIcon sx={{ marginRight: "15px", color: "#01b3a7" }} />
              +94 77 902 7052
            </p>
            <p className="hover:text-[#01b3a7]">
              <EmailIcon sx={{ marginRight: "15px", color: "#01b3a7" }} />
              Geniuslankatours01@gmail.com
            </p>
            <p className="w-full flex items-start hover:text-[#01b3a7]">
              <TelegramIcon sx={{ marginRight: "15px", color: "#01b3a7" }} />
              <span className="inline-block w-full">
                268/2, Jayasuriya Building, Alutgama, Sri Lanka
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            whileInView={{ y: 0, opacity: 1 }}
            className="sm:w-1/2 m-auto leading-9 text-sm text-left   md:ml-[30px]   mt-9 sm:mt-0"
          >
            <h1 className="md:text-left  text-base font-semibold mb-8">
              POPULAR TOURS
            </h1>
            <Link to="/SevenDaysPackage">
              <p className="hover:text-[#50ba87] text-[#01b3a7]">
                14 Days Tour Package
              </p>
            </Link>
            <Link to="/BeachStaying">
              <p className="hover:text-[#50ba87]  text-[#01b3a7]">
                Beach Staying Tour Package
              </p>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: +50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          whileInView={{ x: 0, opacity: 1 }}
          className="md:w-1/3 m-auto text-sm mt-9 leading-9 md:mt-0"
        >
          <h1 className="text-base font-semibold text-left md:ml-[20px] mb-8">
            Quick links
          </h1>
          <div className="md:ml-[20px]">
            <ul className="grid  xl:grid-cols-2 md:grid-cols-1 grid-cols-2  gap-x-8 gap-y-2">
              <li className="flex items-center hover:text-[#01b3a7]">
                <span className="w-2.5 h-2.5 bg-[#01b3a7] rounded-full mr-2"></span>
                <Link to="/AboutSriLanka">About Sri Lanka</Link>
              </li>
              <li className="flex items-center hover:text-[#01b3a7]">
                <span className="w-2.5 h-2.5 bg-[#01b3a7] rounded-full mr-2"></span>
                <Link to="/About_us">About us</Link>
              </li>
              <li className="flex items-center hover:text-[#01b3a7]">
                <span className="w-2.5 h-2.5 bg-[#01b3a7] rounded-full mr-2"></span>
                <Link to="/Packages">Packages</Link>
              </li>
              <li className="flex items-center hover:text-[#01b3a7]">
                <span className="w-2.5 h-2.5 bg-[#01b3a7] rounded-full mr-2"></span>
                <Link to="/PlanningTool">Plan Your Tour</Link>
              </li>
              <li className="flex items-center hover:text-[#01b3a7]">
                <span className="w-2.5 h-2.5 bg-[#01b3a7] rounded-full mr-2"></span>
                <Link to="/Contact_us">Contact us</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="w-full bg-[#11263A] ">
        <div className="w-10/12 m-auto py-5 text-xs font-medium text-[#9b9b9b] flex">
          <div className="w-1/3">
            <p className=" text-sm w-11/12 m-auto py-5 ">
              © 2023 Genius Lanka Tours, Inc. All rights reserved.
            </p>
          </div>
          <div className="w-1/3 hidden sm:block">
            <div className="flex my-5 justify-around mx-5">
              <Link>
                <FacebookOutlinedIcon fontSize="medium" sx={onHover} />
              </Link>
              <Link to="https://x.com/jagath_tou38334 ">
                <TwitterIcon fontSize="medium" sx={onHover} />
              </Link>
              <Link to="https://www.instagram.com/geniuslankatours/">
                <InstagramIcon fontSize="medium" sx={onHover} />
              </Link>
            </div>
          </div>
          <div className="w-1/3 py-5 text-sm ">
            <p className="hover:text-[#01b3a7] cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
