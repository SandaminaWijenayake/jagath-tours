import React, { useContext } from "react";
import { GlobleContext } from "../globleState/GlobleState";
import Button from "@mui/material/Button";
import { Alert, Backdrop, Stack } from "@mui/material";

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
  let color = chosenPlaces.current.includes(id) ? " bg-blue-200" : null;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      style={{ position: "relative" }}
      className="rounded-lg shadow-2xl hover:shadow-md transition-transform hover:-translate-y-1 border dark:bg-gray-100 ease-in "
    >
      <div
        className={`   rounded-lg  dark:bg-gray-100 ${color}`}
        onClick={(e) => {
          choosePlacesHandler(id);
        }}
      >
        <img
          className="rounded-t-lg w-full h-56 object-cover cursor-pointer shadow-xl hover:shadow-md"
          src={imageURL}
        />

        <div
          className={`p-5 h-full cursor-pointer ${color}  rounded-b-lg h-auto`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-blue-900 dark:text-700 line-clamp-1">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-600 line-clamp-3 cursor-pointer text-sm min-h-[3.6em]">
            {place}
          </p>
          <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{ fontSize: "15px" }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleOpen();
              }}
            >
              Read more
            </Button>
            <Backdrop
              sx={{
                position: "absolute",
                left: -16,
                padding: 3,
                color: "#fff",
                fontSize: "20px",
                lineHeight: "1.3",
                borderRadius: "8px",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                fontFamily: "initial",
              }}
              open={open}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleClose();
              }}
            >
              {place}
            </Backdrop>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default CardPlaces;
