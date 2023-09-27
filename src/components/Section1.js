import React from "react";
import image1 from "../images/New folder/03.jpg";
import image2 from "../images/New folder/beautiful-train-ride-sri-lanka-kandy-ella-best-seat.jpg";
import image3 from "../images/sigiriya.jpg";

const Section1 = () => {
  return (
    <div className="w-4/5 m-auto mt-20">
      <h1 className="text-6xl">Welcome to Sri Lanka</h1>
      <p className="mt-7 text-xl w-4/6">
        See what's waiting for you on your next island getaway. Savour the
        unique experiences this island treasure has to offer.
      </p>
      <div className="">
        <div className="flex  justify-between mt-12">
          <div className="w-1/3">
            <img
              src={image1}
              alt=""
              className="h-64 w-11/12 m-auto rounded-xl"
            />
            <p className="text-center text-xl mt-4 font-medium">
              Hotels to stay
            </p>
          </div>
          <div className="w-1/3">
            <img
              src={image2}
              alt=""
              className="h-64 w-11/12 m-auto rounded-xl"
            />
            <p className="text-center text-xl mt-4 font-medium">
              Travel guides
            </p>
          </div>
          <div className="w-1/3">
            <img
              src={image3}
              alt=""
              className="h-64 w-11/12 m-auto rounded-xl"
            />
            <p className="text-center text-xl mt-4 font-medium">Book trips</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
