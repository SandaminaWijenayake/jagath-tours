import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarsIcon from "@mui/icons-material/Stars";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Alert, Stack } from "@mui/material";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LuggageIcon from "@mui/icons-material/Luggage";
import { motion } from "framer-motion";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const services = [
  {
    title: "All transport facilities",
    description:
      "We provide insured airport transportation with multilingual drivers, ensuring your comfort.",
    icon: <LocalTaxiIcon fontSize="large" sx={{ color: "#01b3a7" }} />,
  },
  {
    title: "Accommodations",
    description:
      "We arrange nationwide accommodations, including bungalows, homestays, guest houses, villas, and all-star hotels.",
    icon: <ApartmentIcon fontSize="large" sx={{ color: "#01b3a7" }} />,
  },
  {
    title: "Wide Variety of Tours",
    description:
      "We offer a wide variety of personally picked tours with destinations all over the globe.",
    icon: <WorkspacePremiumIcon fontSize="large" sx={{ color: "#01b3a7" }} />,
  },
  {
    title: "Highly Qualified Service",
    description:
      "Our tour managers are qualified, skilled, and friendly to bring you the best service.",
    icon: <LocalTaxiIcon fontSize="large" sx={{ color: "#01b3a7" }} />,
  },
  {
    title: "24/7 Support",
    description:
      "You can always get professional support from our staff 24/7 and ask any question you have.",
    icon: <SupportAgentIcon fontSize="large" sx={{ color: "#01b3a7" }} />,
  },
  {
    title: "Hotels",
    description:
      "We offer a wide range of hotels, from budget-friendly to luxurious, across the country.",
    icon: <LuggageIcon fontSize="large" sx={{ color: "#01b3a7" }} />,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OurServices = () => {
  const [triggerShake, setTriggerShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerShake(true);
      setTimeout(() => setTriggerShake(false), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const shakeVariants = {
    shaken: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    still: {
      x: 0,
    },
  };
  return (
    <div className="">
      <section className="lg:mt-10  m-auto w-11/12 sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1200px] pt-20  font-Montserrat">
        <div className="py-2">
          <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
            Our Services
          </h1>
          <div className="grid grid-cols-1 font-Montserrat sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {services.map((service, index) => (
              <motion.div
                variants={shakeVariants}
                animate={triggerShake ? "shaken" : "still"}
                key={index}
                className="py-8 pl-4 border-8 border-gray-100  shadow-sm  hover:shadow-md transition"
              >
                <div className="flex">
                  <div className="text-4xl mb-4 w-2/12">{service.icon}</div>
                  <div className="w-9/12">
                    <h3 className="text-xl text-left font-medium text-gray-600">
                      {service.title}
                    </h3>
                    <p className="text-left font-light  mt-2 text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
