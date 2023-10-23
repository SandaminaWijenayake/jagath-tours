import React from "react";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-8 my-5 absolute top-0 left-0 w-full z-10 font-semibold text-white text-lg">
        <div>Genius Lanka Tours</div>
        <div className="w-1/3">
          <ul className="flex justify-around">
            <li>Packages</li>
            <li>Blogs</li>
            <li>Reviews</li>
            <li>Contact us</li>
            <li>About us</li>
          </ul>
        </div>
        <div>Register now</div>
      </div>
      <div className="absolute text-white  top-1/2 w-9/12 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-sans  font-semibold   text-center">
        <p className="text-4xl mb-0">Sri Lanka</p> GENIUS LANKA TOURS HAS OPEN
        DOORS TO WARMLY WELCOME YOU TO ITS COUNTLESS AND REMARKABLE EXPERIENCE
        IN THE PEARL OF INDIAN OCEAN
      </div>
      <div className="relative">
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
