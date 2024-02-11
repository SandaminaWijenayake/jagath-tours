import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarsIcon from "@mui/icons-material/Stars";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const OurServices = () => {
  return (
    <div className="xl:w-4/5 m-auto mt-20 font-Roboto w-11/12">
      {" "}
      <h1 className="text-4xl lg:w-2/5  mt-5 font-Roboto font-semibold">
        OUR SERVICES
      </h1>
      <p className="w-full mb-10">
        We are fully equipped to cater to all tourists who visit Sri Lanka.
      </p>
      <div className="mt-10">
        <span className="text-2xl sm:text-3xl font-bold my-5">
          <StarHalfIcon /> All transport facilities
        </span>
        <span className="text-base ml-2">
          : Transport arrangements to and from the airport. All of our vehicles
          and passengers are fully insured. Our drivers converse in different
          languages.
        </span>
      </div>
      <div className="mt-10">
        <span className="text-2xl sm:text-3xl font-bold my-5">
          <StarHalfIcon /> accommodations
        </span>
        <span className="text-base ml-2">
          : We arrange accommodations at bungalows, homestays, annexes, guest
          houses, villas, and all-star-class hotels in all locations of the
          country.
        </span>
      </div>
      <div className="mt-10">
        <span className="text-2xl sm:text-3xl font-bold my-5">
          <StarHalfIcon /> Arranging tours and travels
        </span>
        <span className="text-base ml-2">
          : From your arrival in Sri Lanka to the time of departure we undertake
          all your travel requirements. These include,
        </span>
      </div>
      {/* <p className="text-base mt-4 sm:text-justify">
            
            <ul className="list-disc marker:text-sky-500 list-outside my-4 mx-5 lg:mx-0  text-base">
                <li>One day trips</li>
                <li>Round tours</li>
                <li>Safari</li>
                <li>North/east tours to the historical cities of Jaffna and Trincomalle</li>
                <li>Cultural tours to the ancient cities of Anuradhapura, Pollonnaruwa and Sigiriya.</li>
                <li>Ornithological tours</li>
                <li>Whale and Dolphin wathing off the southern eastern and west coast of Sri Lanka.
                </li>
                <li>Water sport- fishing, diving wind surfing etc.</li>
                <li>Helicopter tour</li>
                <li>Ayurvedic treatment</li>
                <li>ticketing - All tickating arrangements for inward and outbound travellers are handled by us. Which includes excursisions to the Maldives, India or andy other destination.</li>
                <li>special tours arranged for indivdual and group travel we have devised an all inclusive packages on a full board or half board basis, entrance fees to special locations and guide fees</li>
                <li>please note that all rates are negotiable</li>
            </ul>
        </p> */}
      <div className="mt-4 m-auto md:w-4/5">
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">One day trips from your hotel</p>
        </div>
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">Round tours</p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2"> Safari</p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">
            North/east tours to the historical cities of Jaffna and Trincomalle
          </p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">
            Cultural tours to the ancient cities of Anuradhapura, Pollonnaruwa
            and Sigiriya.
          </p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">
            {" "}
            Special tours are arranged for individual and group travel. We have
            devised all-inclusive packages on a full-board or half-board basis,
            including entrance fees to special locations and guide fees.
          </p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">Ornithological tours</p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">
            Whales and dolphins are wathing off the southern, eastern, and west
            coasts of Sri Lanka.
          </p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">Water sport- fishing, diving wind surfing etc.</p>
        </div>{" "}
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">Ayurvedic treatment</p>
        </div>
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2"> Helicopter tour</p>
        </div>
        <div className="flex">
          <div>
            <DoneAllIcon />
          </div>
          <p className="ml-2">
            Ticketing: All ticketing arrangements for inbound and outbound
            travellers are handled by us. Which includes excursions to the
            Maldives, India or any other destination.
          </p>
        </div>
        <div className="mt-5 md:mt-10 font-Roboto">
          {" "}
          Please note that all rates are negotiable
        </div>
      </div>
    </div>
  );
};

export default OurServices;
