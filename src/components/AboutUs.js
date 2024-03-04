import React from "react";
import aboutusImage from "../images/beach-1.jpg";
import about1 from "../images/about/photo-1585171328560-947fbd92d6f0.jpeg";
import about2 from "../images/about/photo-1623595289196-007a22dd8560.png";
import about3 from "../images/about/tooth.jpg";
import about4 from "../images/about/photo-1627895457805-c7bf42cb9873.png";
import about5 from "../images/about/photo-1665194653893-e5c58037fd0b.png";
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
  return (
    <>
      <div className="w-11/12 lg:w-8/12 m-auto font-Merriweather md:text-sm text-xs text-gray-600 font-light">
        <h1 className="sm:text-6xl text-5xl font-bold mt-28 lg:text-left text-center">
          Who We Are
        </h1>
        <div className="lg:flex lg:pt-14">
          <div className="lg:w-1/2 text-justify">
            <img
              className="rounded-xl lg:hidden my-10"
              src={aboutusImage}
              alt=""
            />
            <p className="leading-5 lg:w-5/6 w-11/12 m-auto lg:m-0 text-gray-700">
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
            {/* <img
              className="rounded-xl lg:hidden my-10"
              src={aboutusImage}
              alt=""
            /> */}

            <p className="leading-5  mt-10 lg:w-5/6 m-auto lg:m-0 lg:mt-10  w-11/12 text-gray-700">
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
          <div className="w-1/2 h-32 lg:mt-36">
            {/* <Lottie animationData={animationData} /> */}
            <img
              className="rounded-xl hidden lg:block"
              src={aboutusImage}
              alt=""
            />
          </div>
        </div>
        <div className="sm:flex">
          <div className="sm:w-1/2 lg:pt-96 w-11/12 m-auto sm:m-0 md:pt-44">
            <h1 className="text-5xl font-bold mb-10">Our Vision for You</h1>
            <p className="leading-5 md:w-5/6 w-11/12 m-auto md:m-0 text-gray-700 text-justify">
              Our vision is to be your trusted partner in discovering the true
              essence of Sri Lanka. We aspire to create journeys that connect
              you with the country's culture, heritage, and natural beauty. When
              you travel with us, you're not just a tourist. you're a friend on
              an adventure.
            </p>
          </div>
          <div className="flex sm:w-1/2 h-96 mb-52 lg:mb-96 pb-10 pt-10 md:pt-0">
            <div className="w-1/3 mx-2 mt-80 h-full ">
              <img className="rounded-lg" src={about1} alt="" />
            </div>
            <div className="w-1/3  mx-2 mt-40 h-full">
              <img className="rounded-lg my-4" src={about2} alt="" />
              <img className="rounded-lg object-cover" src={about3} alt="" />
            </div>
            <div className="w-1/3  mx-2 h-full">
              <img className="rounded-lg my-4" src={about4} alt="" />
              <img className="rounded-lg" src={about5} alt="" />
            </div>
          </div>
        </div>
        <div className=" md:mt-32 pb-32">
          <div className="xl:w-1/2 mb-16">
            <h1 className="text-5xl mt-7 lg:mt-16 font-bold mb-10">
              Why Choose Genius Lanka Tours?
            </h1>
            <p className="leading-5 sm:w-5/6 text-gray-700">
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
              <p className=" text-gray-700 leading-5">
                We believe every traveler is unique. We tailor our tours to your
                interests and preferences, ensuring a memorable adventure.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Safety and Comfort</h1>
              <p className=" text-gray-700 leading-5">
                Your safety is our priority. Our experienced team is dedicated
                to ensuring you have a secure and comfortable journey.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Diverse Services</h1>
              <p className=" text-gray-700 leading-5">
                From guided tours to accommodations, dining, and currency
                exchange, we've got all your travel needs covered.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Legacy of Excellence</h1>
              <p className=" text-gray-700 leading-5">
                With three decades of experience, we've gained the trust of
                thousands of travelers, making us a leading name in the
                industry.
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <h1 className="leading-5 font-semibold">Local Expertise</h1>
              <p className=" text-gray-700 leading-5">
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
