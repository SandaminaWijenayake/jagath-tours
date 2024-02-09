import React from "react";
import image from "../images/beach-3.jpg";
import image1 from "../images/photosgeniuslankatours/kandy/the-temple-of-tooth.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//mui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Hero = () => {
  return (
    <>
      <div className="px-5 absolute top-1/4 sm:top-1/3 text-2xl lg:text-2xl md:right-1/3 font-Roboto sm:w-6/12 w-full font-normal sm:text-left text-white text-center">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl md:text-7xl mb-0 font-bold font-serif"
        >
          Sri Lanka
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1 }}
          className="text-base lg:text-2xl font-Roboto"
        >
          Genius lanka tours has open doors to warmly welcome you to its
          countless and remarkable experience in the pearl of indian ocean
        </motion.div>
        <Link to="/PlanningTool">
          <motion.button
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-2"
          >
            <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{ padding: "10px", paddingLeft: "20px" }}
              >
                Start planning <ArrowForwardIosIcon />
              </Button>
            </Stack>
          </motion.button>
        </Link>
      </div>

      <div
        className="min-h-screen overflow-hidden  w-full bg-center bg-fixed  bg-blend-overlay bg-black/10"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${image1})`,
        }}
      >
        {/* <img
          src={image}
          alt=""
          className="h-screen object-cover w-full bg-fixed bg-center bg-blend-overlay bg-black/20"
        /> */}
      </div>
    </>
  );
};

export default Hero;
