import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const ChosonCardPlaces = ({ imageURL, place, name, id, deleteHandler }) => {
  return (
    <div>
      <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover  rounded-t-lg h-28  w-2/6 md:rounded-none md:rounded-s-lg"
          src={imageURL}
          alt=""
        />
        <div className="flex flex-col justify-between py-4 pl-4 pr-2 leading-normal w-3/6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {place}
          </p>
        </div>
        <div className="w-1/6 text-center">
          <DeleteForeverRoundedIcon
            fontSize="large"
            sx={{ marginRight: "5px", color: "darkRed" }}
            onClick={() => deleteHandler(id)}
          />
        </div>
      </a>
    </div>
  );
};

export default ChosonCardPlaces;
