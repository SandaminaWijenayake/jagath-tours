import React from "react";
import image1 from "../images/New folder/03.jpg";
import image2 from "../images/New folder/beautiful-train-ride-sri-lanka-kandy-ella-best-seat.jpg";
import image3 from "../images/sigiriya.jpg";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Lottie from "lottie-react";
import animationData from "../images/svg/planYourTrip.json";
import packagesMap from "../images/svg/packagesMap.json";

const Section1 = () => {
  return (
    <div className="lg:w-4/5 w-11/12 m-auto mt-20 font-Roboto">
      <h1 className="text-4xl sm:text-6xl  font-bold">Welcome to Sri Lanka</h1>
      <p className="mt-7 text-xl sm:w-4/6 w-full">
        See what's waiting for you on your next island getaway. Savour the
        unique experiences this island treasure has to offer.
      </p>
      <div className="">
        <div className="lg:flex justify-center mt-20">
          <div className="lg:w-1/2">
            <img
              src={image1}
              alt=""
              className="h-80 sm:w-11/12 m-auto rounded-xl object-cover"
            />
            <p className="text-center text-xl mt-4 font-medium">
              Hotels to stay
            </p>

            {/* <Card
              className="sm:w-11/12 m-auto rounded-xl object-cover"
              heading="Planning Tool"
              paragraph="Create a personalized trip itinerary in a fun and effortless way supported by in-depth & unique local heroes knowledge."
            >
              <Lottie animationData={animationData} />
            </Card> */}
          </div>

          <div className="lg:w-1/2 mt-5 lg:mt-0">
            <Link to="/Packages">
              <img
                src={image3}
                alt=""
                className="h-80 sm:w-11/12 m-auto rounded-xl object-cover"
              />
              <p className="text-center text-xl mt-4 font-medium">Book trips</p>
              {/* <Card
                className="sm:w-11/12 m-auto rounded-xl object-cover"
                heading="Choose one of our Curated Trip Packages"
                paragraph="Choose this if you’d like to save time and start from the best-in-class trips composed by us."
              >
                <Lottie animationData={packagesMap} />
              </Card> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
