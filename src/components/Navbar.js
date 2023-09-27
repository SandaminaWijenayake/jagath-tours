import React from "react";
import Hero from "./Hero";
import image from "../images/tourist image 1.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-8 my-5 absolute top-0 left-0 w-full z-10 font-semibold text-white text-lg">
        <div>JAGATH TRAVELS</div>
        <div className="w-1/3">
          <ul className="flex justify-around">
            <li>Packages</li>
            <li>Blogs</li>
            <li>Reviwes</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>Register now</div>
      </div>
      <div className="absolute text-white  top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-sans  font-semibold   text-center">
        JAGATH TRAVELS WARMLY WELCOME YOU TO THE PEARL OF THE INDIAN OCEAN
      </div>
      <div className="relative">
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
