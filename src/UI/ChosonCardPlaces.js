import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const ChosonCardPlaces = ({ imageURL, place, name, id, deleteHandler }) => {
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-3xl font-Lato lg:w-5/6 shadow md:flex-row md:max-w-xl text-gray-900 hover:text-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between py-2 pl-4 pr-2 leading-normal w-5/6">
          <h5 className="mb-1 text-lg font-bold text-center md:text-left tracking-tight ">
            {name}
          </h5>
        </div>

        <div className="w-1/6 text-center hover:text-red-700">
          <DeleteForeverRoundedIcon
            fontSize="large"
            sx={{
              marginRight: "5px",
            }}
            onClick={() => deleteHandler(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChosonCardPlaces;
