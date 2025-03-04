import React, { useContext } from "react";
import { GlobleContext } from "../globleState/GlobleState";
import { Check } from "lucide-react"; // Icon for selected state

const CardPlaces = ({ name, place, imageURL, choosePlacesHandler, id }) => {
  const { chosenPlaces } = useContext(GlobleContext);

  let isSelected = chosenPlaces.current.includes(id);
  let buttonStyles = isSelected
    ? "bg-[#01b3a7] text-white border-[#01b3a7] hover:bg-[#02C8BA]"
    : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white";

  let cardBorder = isSelected ? "border-[#01b3a7]" : "border-gray-300";
  let cardBackground = isSelected ? "bg-[#E5F8F7]" : "bg-white";
  let hoverEffect = "hover:bg-gray-100 transition";

  return (
    <div className="py-6 relative">
      <div
        className={` w-full  border-3 transition ${cardBorder} ${cardBackground} ${hoverEffect}`}
      >
        {/* Checkmark Icon (Only visible when selected) */}
        {isSelected && (
          <div className="absolute top-10 right-2 bg-[#01b3a7] text-white p-1 rounded-full">
            <Check size={18} />
          </div>
        )}

        {/* Image Section */}
        <div className="md:flex">
          <div className="md:w-1/2 overflow-hidden">
            <img
              onClick={() => choosePlacesHandler(id)}
              src={imageURL}
              alt={name}
              className="w-full h-60 md:h-80 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-[22px] font-medium text-gray-900">{name}</h2>
            <p className="text-gray-700 text-sm mt-3 leading-relaxed">
              {place}
            </p>

            <div className="flex md:justify-end justify-center mt-6">
              <button
                className={`px-6 py-2 w-36 border-2 font-medium uppercase transition ${buttonStyles}`}
                onClick={() => choosePlacesHandler(id)}
              >
                {isSelected ? "Selected" : "Select"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlaces;
