import React, { useEffect, useState } from "react";

import test4 from "../images/homepage_image_slider/slider-4-slide-1-1920x678.webp";
import test5 from "../images/homepage_image_slider/slider-4-slide-2-1920x678.webp";
import test6 from "../images/homepage_image_slider/slider-4-slide-3-1920x678.webp";
import { color, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SliderContent from "./SliderContent";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const getStartedButtonHandler = () => {
    navigate("/Packages");
  };
  const slides = [
    {
      id: 1,
      src: test4,
      small_text: "A team of professional Travel Experts",
      largeText: "Our Experience",
      semiText: "Trust",
    },
    {
      id: 2,
      src: test5,
      small_text: "Build your Next Holiday Trip with Us",
      largeText: "Your Tour",
      semiText: "Create",
    },
    {
      id: 3,
      src: test6,
      small_text: "Enjoy the Best Destinations with Our Travel Agency",
      largeText: "The World",
      semiText: "Explore",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="h-[678px] overflow-hidden w-full bg-center bg-cover relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className=" h-full object-cover w-full"
              loading="lazy"
            />

            <SliderContent
              slide={slide}
              getStartedButtonHandler={getStartedButtonHandler}
              slideIndex={currentIndex}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
