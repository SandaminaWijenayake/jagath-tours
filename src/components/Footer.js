import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="bg-black h-full mt-20 rounded-t-lg text-white">
      <div className="flex w-11/12 m-auto py-28">
        <div className="w-2/6 flex justify-around mx-10">
          <FacebookOutlinedIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <WhatsAppIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>
        <div className="w-1/6 font-light">
          <ul>
            <li className="font-semibold">Solutions</li>
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="w-1/6 font-light">
          <ul>
            <li className="font-semibold">Support</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div className="w-1/6 font-light">
          <ul>
            <li className="font-semibold">Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="w-1/6 font-light">
          <ul>
            <li className="font-semibold">Legal</li>
            <li>Claim</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
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
