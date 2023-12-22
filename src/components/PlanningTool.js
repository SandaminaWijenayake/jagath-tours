import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import CardPlaces from "../UI/CardPlaces";
import { ref, getStorage } from "firebase/storage";
import ChosonCardPlaces from "../UI/ChosonCardPlaces";

//dropdown import
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

//search
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

//MUI
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//MUI lists
// const WeatherList = ["Hot Weather", "Cold Weather"];
const InterestList = ["adventure", "beach", "culture", "nature"];
const ActivityList = ["hiking", "water sports", "shopping"];
const placesList = [
  { title: "Nuwara Eliya" },
  { title: "Mirissa" },
  { title: "Sigiriya" },
  { title: "bentota" },
  { title: "Anuradhapura" },
  { title: "The Dambulla Cave Temple" },
  { title: "Galle" },
  { title: "Hikkaduwa" },
  { title: "Ella" },
  { title: "Yala National Park" },
  { title: "Kandy" },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const PlanningTool = () => {
  const [places, setPlaces] = useState([]);
  const [select, setSelect] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const chosenPlaces = useRef([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getPlaces = async () => {
      const colRef = collection(db, "places");

      const docSnap = await getDocs(colRef);
      setPlaces(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPlaces();
  }, []);

  //dropdown
  const theme = useTheme();
  const [dropDownInterest, setDropDownInterest] = React.useState([]);

  const InterestHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDropDownInterest(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    const arraytwo = event.target.value;
    const test = places.filter((data) => {
      return arraytwo.every((item) => data.Interests.includes(item));
    });
    console.log(arraytwo);
    console.log(test);
    setFiltered(test);
    // console.log(places.filter((data) => data.Interests.includes(["beach"])));
  };

  const [dropDownActivities, setDropDownActivities] = React.useState([]);

  const ActivityHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDropDownActivities(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    // const currentActivities = event.taget.value;

    const arraythree = event.target.value;
    const test1 = places.filter((data) => {
      return arraythree.every((item) => data.Activities.includes(item));
    });
    console.log(test1);
    console.log(arraythree);
    setFiltered(test1);
  };

  // weather
  const [dropDownWaether, setDropDownWaether] = React.useState("");

  const WeatherHandleChange = (event) => {
    setDropDownWaether(event.target.value);

    const currentWeather = event.target.value;
    if (currentWeather === "none") {
      return setFiltered(places);
    } else {
      const weatherOutPut = places.filter(
        (data) => data.Weather === currentWeather
      );
      setFiltered(weatherOutPut);
    }
    console.log(currentWeather);
  };

  const searchOutPut = places.filter((items) =>
    items.Name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  const choosePlacesHandler = (id) => {
    chosenPlaces.current = [...chosenPlaces.current, id];

    // console.log("hello : " + chosenPlaces.current);
    setSelect(places.filter((data) => chosenPlaces.current.includes(data.id)));
    // console.log(filtered);
  };

  const deleteHandler = (id) => {
    const newArray = chosenPlaces.current.filter((data) => data !== id);
    chosenPlaces.current = newArray;
    setSelect(places.filter((data) => newArray.includes(data.id)));

    console.log("chosenPlaces.current : " + chosenPlaces.current);
    console.log("id : " + id);
    console.log("newArray: " + newArray);
  };

  const storageRef = ref(storage);
  const pathReference = ref(storage, "images/");

  // const searchInputHandler = (i) => {
  //   const filteredSearch = places.filter((data) => data.Name === i);
  //   // set(filteredSearch);
  // };

  return (
    <div className="w-11/12 m-auto pt-44 lg:flex lg:gap-10">
      <div className="lg:w-7/12">
        <div>
          <div>
            <h1 className="text-4xl font-semibold my-5 font-Roboto">
              Choose places that you want to visit
            </h1>
          </div>
          <div>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Autocomplete
                value={searchInput}
                onInputChange={(e, i) => setSearchInput(i)}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={placesList.map((option) => option.title)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Stack>
          </div>
          <div className="flex w-full">
            <div className="w-1/3">
              <FormControl sx={{ mt: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Interest</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={dropDownInterest}
                  onChange={InterestHandleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Interest" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {InterestList.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, dropDownInterest, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-1/3 ml-5">
              {" "}
              <FormControl sx={{ mt: 1, width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">
                  Activities
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={dropDownActivities}
                  onChange={ActivityHandleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Activities"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {ActivityList.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, dropDownActivities, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-1/3 ml-5">
              <Box sx={{ minWidth: "100%", mt: 1 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Weather</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dropDownWaether}
                    label="Weather"
                    onChange={WeatherHandleChange}
                  >
                    <MenuItem value="none">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Tropical"}>Tropical Weather</MenuItem>
                    <MenuItem value={"Hot"}>Hot Weather</MenuItem>
                    <MenuItem value={"Cold"}>Cold Weather</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 mt-5 gap-4">
          {filtered.map((data) => {
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
      </div>
      <div className="lg:w-5/12">
        <h1 className="text-4xl font-semibold my-5 font-Roboto">
          Chosen places
        </h1>
        {/* {places.map((data) => {
          return (
            <ChosonCardPlaces
              name={data.Name}
              place={data.Description}
              imageURL={data.imageURL}
            />
          );
        })} */}

        {select.map((data) => {
          return (
            <ChosonCardPlaces
              key={data.id}
              name={data.Name}
              place={data.Description}
              imageURL={data.imageURL}
              deleteHandler={deleteHandler}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlanningTool;
