import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const onHover = {
  ":hover": { color: "white" },
};

const Footer = () => {
  return (
    <div className="bg-black h-full mt-20 rounded-t-lg text-white font-Roboto">
      <div className="sm:flex w-11/12 m-auto sm:py-28 py-16">
        <div className="w-2/6 m-auto  font-light text-center">
          <ul className="text-center">
            <li className="font-bold">Links</li>
            <li className="hover:text-sky-300">Packages</li>
            <li className="hover:text-sky-300">Contact us </li>
            <li className="hover:text-sky-300">About us</li>
            <li className="hover:text-sky-300">Reviews</li>
          </ul>
        </div>
        <div className="w-2/6 hidden sm:block">
          <div className="flex justify-around mx-10">
            <FacebookOutlinedIcon
              fontSize="large"
              color="primary"
              sx={onHover}
            />
            <TwitterIcon fontSize="large" color="primary" sx={onHover} />
            <WhatsAppIcon fontSize="large" color="success" sx={onHover} />
            <YouTubeIcon fontSize="large" color="error" sx={onHover} />
          </div>
          <p className="text-center mt-9 hover:text-sky-300">
            Mobile: +94 77 902 7052
          </p>
        </div>
        <div className="sm:w-2/6 font-light m-auto text-center mt-9 sm:mt-0">
          <ul className="text-center">
            <li className="font-bold">Destinations</li>
            <li className="hover:text-sky-300">7 days tour package</li>
            <li className="hover:text-sky-300">4 days tour package</li>
            <li className="hover:text-sky-300">3 days tour package</li>
            <li className="hover:text-sky-300">Plan your own trip</li>
          </ul>
        </div>
        <div className="sm:w-2/6 m-auto sm:hidden mt-9 sm:mt-0">
          <div className="flex justify-around mx-10">
            <FacebookOutlinedIcon
              fontSize="large"
              color="primary"
              sx={onHover}
            />
            <TwitterIcon fontSize="large" color="primary" sx={onHover} />
            <WhatsAppIcon fontSize="large" color="success" sx={onHover} />
            <YouTubeIcon fontSize="large" color="error" sx={onHover} />
          </div>
          <p className="text-center mt-9 hover:text-sky-300">
            Mobile: +94 77 902 7052
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto border-slate-600 border-double border-t-2"></div>
      <p className="font-extralight text-sm w-11/12 m-auto py-5 ">
        © 2023 Jagath Travels, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
