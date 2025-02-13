import React from "react";
import { styled } from "@mui/system";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Paper } from "@mui/material";

const TimeLine = () => {
  // Array of events
  const events = [
    {
      id: 1,
      text: "One day trips from your hotel",
      time: "09:30 am",
    },
    {
      id: 2,
      text: "Round tours",
      time: "10:00 am",
    },
    {
      id: 3,
      text: "Safari",
      time: "11:00 am",
    },
    {
      id: 3,
      text: " North/east tours to the historical cities of Jaffna and Trincomalle",
      time: "11:00 am",
    },
    {
      id: 3,
      text: "Cultural tours to the ancient cities of Anuradhapura, Pollonnaruwa and Sigiriya",
      time: "11:00 am",
    },
    {
      id: 3,
      text: " Special tours are arranged for individual and group travel. We have devised all-inclusive packages on a full-board or half-board basis,including entrance fees to special locations and guide fees",
      time: "11:00 am",
    },
    {
      id: 3,
      text: "Ornithological tours",
      time: "11:00 am",
    },
    {
      id: 3,
      text: " Whales and dolphins are wathing off the southern, eastern, and west coasts of Sri Lanka",
      time: "11:00 am",
    },
    {
      id: 3,
      text: "Water sport- fishing, diving wind surfing etc",
      time: "11:00 am",
    },
    {
      id: 3,
      text: "Ayurvedic treatment",
      time: "11:00 am",
    },
    {
      id: 3,
      text: "Helicopter tour",
      time: "11:00 am",
    },
    {
      id: 3,
      text: " Ticketing: All ticketing arrangements for inbound and outbound travellers are handled by us. Which includes excursions to the Maldives, India or any other destination",
      time: "11:00 am",
    },
    // Add more events as needed
  ];
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: "6px 16px",
  }));

  const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
  }));

  return (
    <div className="xl:w-3/5 w-full m-auto py-2 mt-20 font-Montserrat">
      <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
        Arranging tours and travel
      </h1>

      <p className="text-gray-700 max-w-2xl  text-center text-base lg:text-lg mx-auto mt-3 mb-16">
        From your arrival in Sri Lanka to the time of departure we undertake all
        your travel requirements. These include,
      </p>
      <Timeline position="alternate">
        {events.map((event) => (
          <TimelineItem key={event.id}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <StyledPaper elevation={2}>
                {/* <p className="font-Montserrat">{event.time}</p> */}
                <p className="font-Montserrat">{event.text}</p>
              </StyledPaper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
