import React, { useContext } from "react";
import { GlobleContext } from "../globleState/GlobleState";
import Button from "@mui/material/Button";

const CardPlaces = ({
  name,
  place,
  imageURL,
  choosePlacesHandler,
  id,
  Weather,
  Activities,
}) => {
  const { chosenPlaces } = useContext(GlobleContext);
  let color = chosenPlaces.current.includes(id) ? " bg-blue-300" : null;

  return (
    <div className="rounded-lg shadow-2xl hover:shadow-md transition-transform hover:-translate-y-1  ease-in">
      <div
        className={`max-w-sm  border border-gray-200 rounded-lg  dark:bg-gray-100 ${color}`}
        onClick={(e) => {
          choosePlacesHandler(id);
        }}
      >
        <img
          className="rounded-t-lg w-full h-56 object-cover cursor-pointer shadow-xl hover:shadow-md"
          src={imageURL}
        />

        <div className={`p-5 h-full cursor-pointer ${color}  rounded-b-lg`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-700 line-clamp-1">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 line-clamp-3 cursor-pointer text-sm">
            {place}
          </p>
          <Button
            variant="contained"
            sx={{ fontSize: "15px" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPlaces;
