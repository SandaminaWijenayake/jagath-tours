import Lottie from "lottie-react";
import React from "react";
import animationData from "../images/svg/planYourTrip.json";
import packagesMap from "../images/svg/packagesMap.json";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const Planning = () => {
  return (
    <div className="mt-28 font-Roboto">
      <h1 className="text-center my-20 font-Roboto font-bold md:text-4xl text-2xl w-3/5 m-auto">
        Discover Your Next Adventure: Plan Your Perfect Getaway with Our Trip
        Planning Guide!
      </h1>
      <div className="md:flex justify-center lg:w-8/12 lg:m-auto">
        <div className="md:w-1/2">
          <Link to="/PlanningTool">
            <Card
              className="sm:w-11/12 m-auto rounded-xl object-cover"
              heading="Planning Tool"
              paragraph="Create a personalized trip itinerary in a fun and effortless way supported by in-depth & unique local heroes knowledge."
            >
              <Lottie animationData={animationData} />
            </Card>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Link to="/Packages">
            <Card
              className="sm:w-11/12 m-auto rounded-xl mt-14 md:mt-0 object-cover"
              heading="Choose one of our Curated Trip Packages"
              paragraph="Choose this if you'd like to save time and start from the best-in-class trips composed by us."
            >
              <Lottie animationData={packagesMap} />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planning;
