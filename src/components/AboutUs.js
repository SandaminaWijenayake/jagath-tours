import React, { useEffect } from "react";
import aboutusImage from "../images/about-1-519x564.webp";
import about1 from "../images/about/photo-1585171328560-947fbd92d6f0.webp";
import about2 from "../images/about/photo-1623595289196-007a22dd8560.webp";
import about3 from "../images/about/tooth.webp";
import about4 from "../images/about/photo-1627895457805-c7bf42cb9873.webp";
import about5 from "../images/about/photo-1665194653893-e5c58037fd0b.webp";
import Lottie from "lottie-react";
import animationData from "../images/svg/Animation - 1698642732391.json";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [[about1], [about2, about3], [about4, about5]];

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <div className="mt-10 m-auto font-Montserrat md:text-base text-sm leading-5 md:leading-6 text-gray-600 font-light">
        <div className="xl:w-[1200px] lg:w-[960px]   w-[510px] m-auto  lg:flex pt-14">
          <div className="lg:w-1/2 text-justify  m-auto">
            <img className="" src={aboutusImage} alt="" />
          </div>
          <div className="lg:w-1/2 w-11/12 md:w-full m-auto text-sm lg:px-8 xl:px-0 text-justify">
            <h1 className=" mt-10 text-[40px] text-[#15151517] font-normal  md:w-[510px]   leading-[1.2]   lg:text-[64px] mb-10 lg:text-left text-center">
              Why choose us
            </h1>
            <p className="leading-5   m-auto lg:m-0   md:leading-6">
              My name is Jagath Nilantha de Silva (Jagath de Silva). My family
              hails from Kaluwamodara Aluthgama in the Kaluthara district. This
              town is in close proximity to the world-famous Golden Mile, a
              tourist resort in Moragalla and Benthota. My family owned a small
              batik factory, "Suneth Batiks." Many tourists visited our showroom
              to purchase some beautiful batik garments. This interaction with
              the tourists was the commencement of our family getting involved
              in the tourist trade. As a schoolboy, I soon became a participant
              with the passage of time, I came into close contact with travel
              agents from Scandinavian and European countries.
            </p>

            <p className="leading-5 hidden xl:block mt-10  m-auto lg:m-0  lg:mt-10 md:leading-6  ">
              I started my trade as a guide cum driver. I was rewarded for my
              hard work, dedication, efficiency, and honesty. when the tour
              operators started liaising closely with me about their travel
              arrangements and tours. These tour operators were Finnmatkat
              (Scandinavian), Vingresor, Scan Tours, Tiaereborg, Ving Tours, My
              Travel, Always Fritidsresor, Arurinko Matkat, Tui Nordic, Tui, and
              Start Tour. I handled these travel operations under my travel
              company, Jagath travels (Now new name Genius Lanka Tours). With
              the industry in Sri Lanka, I opened a seafood restaurant named
              Sunset Restaurant in Bentota 14-room hotel Southern Palm Villa. I
              have been in the travel trade for 30 years and have wide
              experience in this field. I am committed to maintaining the same
              high standards for all tourists who wish to make use of my
              service. We assure you of your security and safety at all times
              during your stay in Sri Lanka.
            </p>
          </div>
        </div>
        <div className="block xl:hidden mt-10      md:leading-6 xl:w-[1200px] lg:w-[960px]  w-[510px] m-auto  md:w-[510px]  text-justify text-sm  ">
          <p className="leading-5 w-11/12 md:w-full m-auto">
            I started my trade as a guide cum driver. I was rewarded for my hard
            work, dedication, efficiency, and honesty. when the tour operators
            started liaising closely with me about their travel arrangements and
            tours. These tour operators were Finnmatkat (Scandinavian),
            Vingresor, Scan Tours, Tiaereborg, Ving Tours, My Travel, Always
            Fritidsresor, Arurinko Matkat, Tui Nordic, Tui, and Start Tour. I
            handled these travel operations under my travel company, Jagath
            travels (Now new name Genius Lanka Tours). With the industry in Sri
            Lanka, I opened a seafood restaurant named Sunset Restaurant in
            Bentota 14-room hotel Southern Palm Villa. I have been in the travel
            trade for 30 years and have wide experience in this field. I am
            committed to maintaining the same high standards for all tourists
            who wish to make use of my service. We assure you of your security
            and safety at all times during your stay in Sri Lanka.
          </p>
        </div>
        <div className="w-/12 sm:h-full m-auto">
          <div className="w-[400px] mt-[64px] sm:w-[550px] md:w-[600px]  lg:w-[700px] xl:w-[1200px] m-auto  ">
            <h1 className="text-5xl font-bold mb-10">Our Vision for You</h1>
            <p className="leading-5   text-gray-700 md:leading-6 text-justify">
              Our vision is to be your trusted partner in discovering the true
              essence of Sri Lanka. We aspire to create journeys that connect
              you with the country's culture, heritage, and natural beauty. When
              you travel with us, you're not just a tourist. you're a friend on
              an adventure.
            </p>
          </div>
        </div>
        <div className=" sm:mt-32 w-11/12 m-auto  pb-32">
          <div className="xl:w-1/2 mb-16">
            <h1 className="text-5xl mt-7 lg:mt-16 font-bold mb-10">
              Why Choose Genius Lanka Tours?
            </h1>
            <p className="leading-5 sm:w-5/6 text-gray-700 md:leading-6">
              Join us at Genius Lanka Tours, and let's embark on a journey that
              will forever change the way you see Sri Lanka.
            </p>
          </div>
          <div className="sm:grid grid-cols-3 gap-14">
            <div className="">
              <h1 className="leading-5 font-semibold">Local Expertise</h1>
              <p className=" text-gray-700 leading-5">
                With deep roots in Sri Lanka, we provide authentic experiences,
                taking you off the beaten path to discover hidden gems.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">
                Personalized Experiences
              </h1>
              <p className=" text-gray-700 leading-5 md:leading-6">
                We believe every traveler is unique. We tailor our tours to your
                interests and preferences, ensuring a memorable adventure.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Safety and Comfort</h1>
              <p className=" text-gray-700 leading-5 md:leading-6">
                Your safety is our priority. Our experienced team is dedicated
                to ensuring you have a secure and comfortable journey.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Diverse Services</h1>
              <p className=" text-gray-700 leading-5 md:leading-6">
                From guided tours to accommodations, dining, and currency
                exchange, we've got all your travel needs covered.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Legacy of Excellence</h1>
              <p className=" text-gray-700 leading-5 md:leading-6">
                With three decades of experience, we've gained the trust of
                thousands of travelers, making us a leading name in the
                industry.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Local Expertise</h1>
              <p className=" text-gray-700 leading-5 md:leading-6">
                With deep roots in Sri Lanka, we provide authentic experiences,
                taking you off the beaten path to discover hidden gems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
