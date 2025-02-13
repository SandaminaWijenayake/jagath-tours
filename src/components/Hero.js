import React, { useEffect, useState } from "react";
import image from "../images/beach-3.jpg";
import image1 from "../images/photosgeniuslankatours/kandy/the-temple-of-tooth.jpg";
import test1 from "../images/photosgeniuslankatours/kandy/Kandy-and-The-Temple.jpg";
import test2 from "../images/beach-3.jpg";
import test3 from "../images/photosgeniuslankatours/148.jpg";
import { color, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

//mui
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
      src: test1,
      small_text: "A team of professional Travel Experts",
      largeText: "Our Experience",
      semiText: "Trust",
    },
    {
      id: 2,
      src: test2,
      small_text: "Build your Next Holiday Trip with Us",
      largeText: "Your Tour",
      semiText: "Create",
    },
    {
      id: 3,
      src: test3,
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
      <div
        className="h-[678px] overflow-hidden w-full bg-center bg-cover relative"
        // Ensure no conflicting background color (e.g., bg-white)
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
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
