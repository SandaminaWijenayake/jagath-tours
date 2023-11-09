import React from "react";
import image1 from "../images/New folder/03.jpg";
import image2 from "../images/New folder/beautiful-train-ride-sri-lanka-kandy-ella-best-seat.jpg";
import image3 from "../images/sigiriya.jpg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="lg:w-4/5 m-auto mt-20 font-Roboto">
      <h1 className="text-4xl sm:text-6xl  font-bold">Welcome to Sri Lanka</h1>
      <p className="mt-7 text-xl sm:w-4/6 w-full">
        See what's waiting for you on your next island getaway. Savour the
        unique experiences this island treasure has to offer.
      </p>
      <div className="">
        <div className="lg:flex justify-between mt-12">
          <div className="lg:w-1/2">
            <img
              src={image1}
              alt=""
              className="h-80 w-11/12 m-auto rounded-xl object-cover"
            />
            <p className="text-center text-xl mt-4 font-medium">
              Hotels to stay
            </p>
          </div>

          <div className="lg:w-1/2 mt-5 lg:mt-0">
            <Link to="/Packages">
              <img
                src={image3}
                alt=""
                className="h-80 w-11/12 m-auto rounded-xl object-cover"
              />
              <p className="text-center text-xl mt-4 font-medium">Book trips</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
