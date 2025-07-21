import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import CardPlaces from "../UI/CardPlaces";
import { ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";

//dropdown import
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import CloseIcon from "@mui/icons-material/Close";

//search

import { GlobleContext } from "../globleState/GlobleState";

//button
import Button from "@mui/material/Button";

// loading
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

//chip

//MUI
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

//MUI lists
// const WeatherList = ["Hot Weather", "Cold Weather"];
// const InterestList = ["adventure", "beach", "culture", "nature"];
// const ActivityList = ["hiking", "water sports", "shopping"];
// const placesList = [
//   { title: "Nuwara Eliya" },
//   { title: "Mirissa" },
//   { title: "Sigiriya" },
//   { title: "bentota" },
//   { title: "Anuradhapura" },
//   { title: "The Dambulla Cave Temple" },
//   { title: "Galle" },
//   { title: "Hikkaduwa" },
//   { title: "Ella" },
//   { title: "Yala National Park" },
//   { title: "Kandy" },
// ];

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

const PlanningTool = () => {
  const [places, setPlaces] = useState([]);
  // const [select, setSelect] = useState([]);
  const [tempState, setTempState] = useState([]);
  const [dropDownInterest, setDropDownInterest] = React.useState("");
  const [dropDownWaether, setDropDownWaether] = React.useState("");
  const [dropDownActivities, setDropDownActivities] = React.useState("");

  const [isLoading, setIsLoading] = useState(true);

  const { select, setSelect, chosenPlaces } = useContext(GlobleContext);

  const navigate = useNavigate();

  // const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getPlaces = async () => {
      const colRef = collection(db, "places");

      const docSnap = await getDocs(colRef);
      setPlaces(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTempState(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    getPlaces();
  }, []);

  useEffect(() => {
    let updatedList = [];
    updatedList = tempState;

    if (dropDownInterest) {
      updatedList = updatedList.filter(
        (item) => item.Interests === dropDownInterest
      );
    }
    if (dropDownActivities) {
      updatedList = updatedList.filter(
        (item) => item.Activities === dropDownActivities
      );
    }
    if (dropDownWaether) {
      updatedList = updatedList.filter(
        (item) => item.Weather === dropDownWaether
      );
    }
    setPlaces(updatedList);
  }, [dropDownInterest, dropDownActivities, dropDownWaether, tempState]);

  const buttonClickHandler = () => {
    console.log("button");
    navigate("/Result");
  };

  const InterestHandleChange = (event) => {
    setDropDownInterest(event.target.value);
  };

  const ActivityHandleChange = (event) => {
    setDropDownActivities(event.target.value);
  };

  const WeatherHandleChange = (event) => {
    setDropDownWaether(event.target.value);
  };

  const choosePlacesHandler = (id) => {
    console.log("chosenPlaces" + chosenPlaces.current.includes(id));
    if (chosenPlaces.current.includes(id)) {
      chosenPlaces.current = chosenPlaces.current.filter((item) => item !== id);
      console.log("worked");
    } else {
      chosenPlaces.current = [...chosenPlaces.current, id];
    }
    console.log("hello : " + chosenPlaces.current);
    setSelect(places.filter((data) => chosenPlaces.current.includes(data.id)));
    console.log("selected ", select);
  };

  // const deleteHandler = (id) => {
  //   const newArray = chosenPlaces.current.filter((data) => data !== id);
  //   chosenPlaces.current = newArray;
  //   setSelect(places.filter((data) => newArray.includes(data.id)));

  //   console.log("chosenPlaces.current : " + chosenPlaces.current);
  //   console.log("id : " + id);
  //   console.log("newArray: " + newArray);
  //   console.log("select ", select);
  // };

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="w-11/12 m-auto pt-20 lg:flex lg:gap-10 relative font-Merriweather md:text-sm text-xs text-gray-600 font-light">
      <div className="lg:w-9/12 md:w-11/12 m-auto">
        <div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold my-5  text-center md:text-left">
              Choose places that you want to visit
            </h1>
          </div>
          {/* <div className="fixed bottom-10 right-10 max-h-screen z-50">
            <Stack spacing={2} direction="row" sx={{ mt: 3 }}>
              <Button
                variant="contained"
                onClick={buttonClickHandler}
                sx={{ paddingLeft: "20px" }}
              >
                Next
                <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Stack>
          </div> */}

          <div className="sm:flex w-full">
            <div className="sm:w-1/3">
              <Box sx={{ minWidth: "100%", mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Interets
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropDownInterest}
                    label="Weather"
                    onChange={InterestHandleChange}
                  >
                    <MenuItem sx={{ fontFamily: "-moz-initial" }} value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"adventure"}
                    >
                      Adventure
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"beach"}
                    >
                      Beach
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"culture"}
                    >
                      Culture
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"nature"}
                    >
                      Nature
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="sm:w-1/3 sm:ml-5">
              <Box sx={{ minWidth: "100%", mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Activities
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropDownActivities}
                    label="Weather"
                    onChange={ActivityHandleChange}
                  >
                    <MenuItem sx={{ fontFamily: "-moz-initial" }} value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"hiking"}
                    >
                      Hiking
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"water sports"}
                    >
                      Water sports
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"shopping"}
                    >
                      Shopping
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="sm:w-1/3 sm:ml-5">
              <Box sx={{ minWidth: "100%", mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Weather</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropDownWaether}
                    label="Weather"
                    onChange={WeatherHandleChange}
                  >
                    <MenuItem sx={{ fontFamily: "-moz-initial" }} value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"Tropical"}
                    >
                      Tropical Weather
                    </MenuItem>
                    <MenuItem sx={{ fontFamily: "-moz-initial" }} value={"Hot"}>
                      Hot Weather
                    </MenuItem>
                    <MenuItem
                      sx={{ fontFamily: "-moz-initial" }}
                      value={"Cold"}
                    >
                      Cold Weather
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="min-h-screen flex justify-center mt-52">
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="60px" />
            </Box>
          </div>
        ) : (
          <div className="w-full lg:flex">
            <div className="lg:w-8/12">
              {places.map((data) => {
                return (
                  <CardPlaces
                    key={data.id}
                    name={data.Name}
                    place={data.Description}
                    imageURL={data.imageURL}
                    id={data.id}
                    Weather={data.Weather}
                    Activities={data.Activities}
                    choosePlacesHandler={choosePlacesHandler}
                  />
                );
              })}
            </div>
            <div className="w-4/12 pl-10 sticky top-20 bg-white h-[700px] border-[#01b3a7] p-4 flex flex-col  rounded-md">
              <Typography
                variant="h6"
                fontWeight="600"
                color="#01b3a7"
                gutterBottom
              >
                Chosen Places
              </Typography>

              {/* Scrollable List */}
              <Box className="flex-grow overflow-y-auto space-y-3">
                {select.map((data) => (
                  <Card
                    key={data.id}
                    sx={{
                      backgroundColor: "#E5F8F7",
                      padding: "8px",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent
                      sx={{
                        padding: "8px !important",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body1">{data.Name}</Typography>
                      <CloseIcon
                        sx={{
                          ":hover": {
                            backgroundColor: "#01b3a7",
                            color: "white",
                            borderRadius: "50%",
                          },
                        }}
                        onClick={() => choosePlacesHandler(data.id)}
                      />
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Button at the bottom */}
              <Button
                onClick={buttonClickHandler}
                variant="contained"
                fullWidth
                sx={{
                  marginTop: "16px",
                  backgroundColor: "#01b3a7",
                  "&:hover": { backgroundColor: "#02C8BA" },
                  textTransform: "none",
                  position: "sticky",
                  bottom: "10px",
                }}
              >
                Confirm Selection
              </Button>
            </div>
            <div className="block lg:hidden">
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  position: "fixed",
                  top: "20%",
                  right: 0,
                  transform: "translateY(-50%)",
                  backgroundColor: "#01b3a7",
                  color: "white",
                  "&:hover": { backgroundColor: "#02C8BA" },
                  borderRadius: "50%",
                  boxShadow: 2,
                  padding: "10px",
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              {/* Mobile Sidebar Drawer */}
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ width: "75%" }}
              >
                <Box sx={{ width: "75vw", padding: 2 }}>
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ float: "right" }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Typography
                    variant="h6"
                    fontWeight="600"
                    color="#01b3a7"
                    gutterBottom
                  >
                    Chosen Places
                  </Typography>

                  {/* Scrollable List */}
                  <Box className="w-full flex-grow overflow-y-auto space-y-3">
                    {select.map((data) => (
                      <Card
                        key={data.id}
                        sx={{
                          backgroundColor: "#E5F8F7",
                          padding: "8px",
                          boxShadow: "none",
                        }}
                      >
                        <CardContent
                          sx={{
                            padding: "8px !important",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="body1">{data.Name}</Typography>
                          <CloseIcon
                            sx={{
                              ":hover": {
                                backgroundColor: "#01b3a7",
                                color: "white",
                                borderRadius: "50%",
                              },
                            }}
                            onClick={() => choosePlacesHandler(data.id)}
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </Box>

                  {/* Confirm Button */}
                  <Button
                    onClick={buttonClickHandler}
                    variant="contained"
                    fullWidth
                    sx={{
                      marginTop: "16px",
                      backgroundColor: "#01b3a7",
                      "&:hover": { backgroundColor: "#02C8BA" },
                      textTransform: "none",
                    }}
                  >
                    Confirm Selection
                  </Button>
                </Box>
              </Drawer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanningTool;
