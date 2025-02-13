import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const onHover = {
  ":hover": { color: "white" },
};

const Footer = () => {
  return (
    <div className="bg-black h-full mt-20 rounded-t-lg text-white font-Merriweather md:text-base text-xs">
      <div className="sm:flex w-11/12 m-auto sm:py-28 py-16">
        <div className="w-2/6 m-auto  font-light text-center">
          <ul className="text-center">
            <li className="font-bold">Links</li>
            <Link to="/Packages">
              <li className="hover:text-sky-300">Packages</li>
            </Link>
            <Link to="/PlanningTool">
              <li className="hover:text-sky-300">Plan your trip</li>
            </Link>
            <Link to="/Contact_Us">
              <li className="hover:text-sky-300">Contact us </li>
            </Link>
            <Link to="/About_us">
              <li className="hover:text-sky-300">About us</li>
            </Link>
          </ul>
        </div>
        <div className="w-2/6 hidden sm:block">
          <div className="flex justify-around mx-10">
            <Link>
              <FacebookOutlinedIcon
                fontSize="medium"
                color="primary"
                sx={onHover}
              />
            </Link>
            <Link to="https://x.com/jagath_tou38334 ">
              <TwitterIcon fontSize="medium" color="primary" sx={onHover} />
            </Link>
            <Link to="https://www.instagram.com/geniuslankatours/">
              <InstagramIcon fontSize="medium" color="error" sx={onHover} />
            </Link>
          </div>
          <p className="text-center mt-9 hover:text-sky-300">
            Mobile: +94 77 902 7052
          </p>
        </div>
        <div className="sm:w-2/6 font-light m-auto text-center mt-9 sm:mt-0">
          <ul className="text-center">
            <li className="font-bold">Destinations</li>
            <Link to="/SevenDaysPackage">
              <li className="hover:text-sky-300">14 days tour package</li>
            </Link>
            <Link to="/BeachStaying">
              <li className="hover:text-sky-300">Beach staying tour package</li>
            </Link>
          </ul>
        </div>
        <div className="sm:w-2/6 m-auto sm:hidden mt-9 sm:mt-0">
          <div className="flex justify-around mx-10">
            <Link>
              <FacebookOutlinedIcon
                fontSize="medium"
                color="primary"
                sx={onHover}
              />
            </Link>
            <Link to="https://x.com/jagath_tou38334 ">
              <TwitterIcon fontSize="medium" color="primary" sx={onHover} />
            </Link>
            <Link to="https://www.instagram.com/geniuslankatours/">
              <InstagramIcon fontSize="medium" color="error" sx={onHover} />
            </Link>
          </div>
          <p className="text-center mt-9 hover:text-sky-300">
            Mobile: +94 77 902 7052
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto border-slate-600 border-double border-t-2"></div>
      <p className="font-extralight text-sm w-11/12 m-auto py-5 ">
        © 2023 Genius Lanka Tours, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
