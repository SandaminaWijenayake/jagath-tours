import { Button } from "@mui/material";
import { motion } from "framer-motion";

const SliderContent = ({ slide, getStartedButtonHandler, slideIndex }) => {
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

        <motion.div
          key={`button-${slideIndex}`}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={getStartedButtonHandler}
            variant="outlined"
            sx={{
              color: "white",
              marginTop: "25px",
              borderColor: "white",
              paddingX: "25px",
              paddingY: "15px",
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
