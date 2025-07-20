
import image3 from "../images/sigiriya.jpg";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Section1 = () => {
  return (
    <div className="lg:w-4/5 w-11/12 m-auto mt-20 font-Roboto">
      <h1 className="text-4xl sm:text-6xl  font-bold">Welcome to Sri Lanka</h1>
      <p className="mt-7 text-xl sm:w-4/6 w-full">
        See what's waiting for you on your next island getaway. Savour the
        unique experiences this island treasure has to offer.
      </p>
      <div className="">
        <div className="mt-20">
       

          <div className="lg:w-1/2 mt-5 lg:mt-20 lg:m-auto">
            <img
              src={image3}
              alt=""
              className="h-80 sm:w-11/12 m-auto rounded-xl object-cover"
            />
            <p className="text-center text-xl mt-4 font-medium">Book trips</p>
            <p className="text-center text-sm mt-4 font-medium">
              You have the flexibility to select from our pre-planned tour
              packages or craft your own personalized journey according to your
              preferences.
            </p>
            <div className="text-center mt-4">
              <Link to="/packages">
                <Button variant="outlined">
                  Tour packages <ArrowForwardIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
