import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SliderContent = ({ slide, getStartedButtonHandler, slideIndex }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col justify-center font-Montserrat inset-0 text-white lg:w-8/12 m-auto w-11/12">
      <div>
        <motion.p
          key={`small-text-${slideIndex}`}
          className="lg:text-xl text-base uppercase font-medium mb-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {slide.small_text}
        </motion.p>

        <motion.div
          key={`text-group-${slideIndex}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="lg:text-5xl text-4xl lg:mr-2 font-normal mr-2">
            {slide.semiText}
          </span>
          <span className="lg:text-7xl font-bold text-4xl lg:font-bold mb-4">
            {slide.largeText}
          </span>
        </motion.div>

        <motion.div className="relative z-[50]"
          key={`button-${slideIndex}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={getStartedButtonHandler}
            className="mt-[25px] font-Montserrat text-base inline-block pt-[17px] pr-[28px] pb-[15px] px-[25px] py-[15px] border-2 border-white text-white font-medium  transition hover:bg-[#01b3a7] hover:border-[#01b3a7]"
          >
            Plan Your Trip
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderContent;
