import { Button } from "@mui/material";
import { motion } from "framer-motion";

const SliderContent = ({ slide, getStartedButtonHandler, slideIndex }) => {
  return (
    <div className="absolute flex flex-col justify-center font-Montserrat inset-0 text-white lg:w-8/12 m-auto w-11/12">
      <div>
        {/* Small Text Animation (Left to Right) */}
        <motion.p
          key={`small-text-${slideIndex}`} // Unique key based on slideIndex
          className="lg:text-xl text-base uppercase font-medium mb-2"
          initial={{ x: -50, opacity: 0 }} // Start slightly left and invisible
          animate={{ x: 0, opacity: 1 }} // Move to the default position and become visible
          transition={{ duration: 0.5 }} // Animation duration
        >
          {slide.small_text}
        </motion.p>

        {/* SemiText and LargeText Animation (Bottom to Left) */}
        <motion.div
          key={`text-group-${slideIndex}`} // Unique key based on slideIndex
          initial={{ y: 50, opacity: 0 }} // Start slightly below and invisible
          animate={{ y: 0, opacity: 1 }} // Move to the default position and become visible
          transition={{ duration: 0.7, delay: 0.2 }} // Slight delay for effect
        >
          <span className="lg:text-5xl text-4xl lg:mr-2 font-normal mr-2">
            {slide.semiText}
          </span>
          <span className="lg:text-5xl font-bold text-4xl lg:font-extrabold mb-4">
            {slide.largeText}
          </span>
        </motion.div>

        {/* Button Animation (Left to Right) */}
        <motion.div
          key={`button-${slideIndex}`} // Unique key based on slideIndex
          initial={{ x: -50, opacity: 0 }} // Start slightly left and invisible
          animate={{ x: 0, opacity: 1 }} // Move to the default position and become visible
          transition={{ duration: 0.5, delay: 0.4 }} // Slight delay after the text animation
        >
          <Button
            onClick={getStartedButtonHandler}
            variant="outlined"
            sx={{
              color: "white",
              marginTop: "25px",
              borderColor: "white",
              padding: "15px",
              "&:hover": {
                color: "white",
                borderColor: "#007BFF",
                backgroundColor: "#007BFF",
              },
            }}
          >
            Explore Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderContent;
