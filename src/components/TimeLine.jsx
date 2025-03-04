import React from "react";
// import { styled } from "@mui/system";
import Masonry from "react-masonry-css";
import { useState, useEffect } from "react";

const colors = ["#E7E6FB", "#ADD8E7"];

const TimeLine = () => {
  const events = [
    {
      id: 1,
      text: "One day trips from your hotel",
    },
    {
      id: 2,
      text: "Round tours",
    },
    {
      id: 3,
      text: "Safari",
    },
    {
      id: 4,
      text: " North/east tours to the historical cities of Jaffna and Trincomalle",
    },
    {
      id: 5,
      text: "Cultural tours to the ancient cities of Anuradhapura, Pollonnaruwa and Sigiriya",
    },
    {
      id: 6,
      text: " Special tours are arranged for individual and group travel. We have devised all-inclusive packages on a full-board or half-board basis,including entrance fees to special locations and guide fees",
    },
    {
      id: 8,
      text: " Whales and dolphins are wathing off the southern, eastern, and west coasts of Sri Lanka",
    },
    {
      id: 7,
      text: "Ornithological tours",
    },
    {
      id: 9,
      text: "Water sport- fishing, diving wind surfing etc",
    },
    {
      id: 10,
      text: "Ayurvedic treatment",
    },
    {
      id: 12,
      text: " Ticketing: All ticketing arrangements for inbound and outbound travellers are handled by us. Which includes excursions to the Maldives, India or any other destination",
    },
    {
      id: 11,
      text: "Helicopter tour",
    },
  ];
  const [backgroundColors, setBackgroundColors] = useState(
    events.map(() => colors[Math.floor(Math.random() * colors.length)])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColors((prevColors) =>
        prevColors.map(() => colors[Math.floor(Math.random() * colors.length)])
      );
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="xl:w-3/5 w-full m-auto py-2 mt-20 font-Montserrat">
      <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
        Arranging tours and travel
      </h1>

      <p className="text-gray-700 max-w-2xl  text-center text-base lg:text-lg mx-auto mt-3 mb-16">
        From your arrival in Sri Lanka to the time of departure we undertake all
        your travel requirements. These include,
      </p>
      <div className="font-Montserrat p-4">
        <Masonry
          breakpointCols={{ default: 3, 768: 2, 500: 1 }}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {events.map((event, id) => (
            <div
              key={id}
              className=" text-black p-2 bg-[#dcf0f7] flex  items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-[#a4d7ea] hover:shadow-lg"
              // style={{ borderColor: backgroundColors[id] }}
            >
              <p className="text-lg font-normal">{event.text}</p>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default TimeLine;
