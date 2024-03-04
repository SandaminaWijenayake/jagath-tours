import React, { useContext, useEffect, useState, useRef } from "react";
import { GlobleContext } from "../globleState/GlobleState";
import ChosonCardPlaces from "../UI/ChosonCardPlaces";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

//mui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// emailJs
import emailjs from "@emailjs/browser";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

// snackbar

const Result = () => {
  const { select, setSelect, chosenPlaces } = useContext(GlobleContext);
  const [places, setPlaces] = useState([]);
  const form = useRef();
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // useEffect(() => {
  //   select.forEach((data) => {
  //     setName(data.Name);
  //   });
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    handleOpen();
    emailjs
      .sendForm(
        "service_efkbr9o",
        "template_9nybhvk",
        form.current,
        "iX2lOgrjJzkOvLK06"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    chosenPlaces.current.length = [];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getPlaces = async () => {
      const colRef = collection(db, "places");

      const docSnap = await getDocs(colRef);
      setPlaces(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // setTempState(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPlaces();
  }, []);

  let toText = [];
  toText.push(name);

  const deleteHandler = (id) => {
    const newArray = chosenPlaces.current.filter((data) => data !== id);
    chosenPlaces.current = newArray;
    setSelect(places.filter((data) => newArray.includes(data.id)));

    console.log("chosenPlaces.current : " + chosenPlaces.current);
    console.log("id : " + id);
    console.log("newArray: " + newArray);
  };

  const checkTheChoosePlaces = () => {
    if (chosenPlaces.current.length === 0) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="w-4/5 m-auto font-Merriweather md:text-sm text-xs text-gray-600 font-light lg:py-36 py-20">
      <div className="md:flex">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold my-5  md:mb-5 text-center md:text-left">
            Chosen places
          </h1>
          {chosenPlaces.current.length === 0 ? (
            <div className="  ">
              <h1 className="">You haven't choose any places</h1>
              <h1 className="md:text-left text-4xl">
                <Button
                  size="medium"
                  onClick={() => {
                    navigate("/PlanningTool");
                  }}
                >
                  <KeyboardArrowLeftIcon /> choose places
                </Button>
              </h1>
            </div>
          ) : (
            <div>
              {select.map((data) => {
                return (
                  <div className="py-2 md:mr-16">
                    <ChosonCardPlaces
                      key={data.id}
                      name={data.Name}
                      place={data.Description}
                      imageURL={data.imageURL}
                      deleteHandler={deleteHandler}
                      id={data.id}
                    />
                  </div>
                );
              })}{" "}
            </div>
          )}
        </div>

        <div className="md:w-1/2 leading-5">
          <p className="pt-4">
            Thank you for expressing interest in exploring new destinations!
            Please provide us with your preferred locations, and any additional
            details you'd like to share. We'll promptly reach out to you via
            email to assist you further in planning your dream trip.
          </p>
          <p className="py-5">
            {" "}
            <WhatsAppIcon fontSize="large" color="success" /> +94 77 902 7052
          </p>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        sx={{
                          width: "100%",
                        }}
                        type="text"
                        name="user_name"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sx={{ display: "none" }}>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="places"
                        variant="outlined"
                        sx={{
                          width: "100%",
                        }}
                        type="text"
                        name="places"
                        required
                        value={select.map((item) => item.Name).join(",")}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Your Email"
                        variant="outlined"
                        sx={{
                          width: "100%",
                        }}
                        type="email"
                        name="user_email"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Phone number"
                        variant="outlined"
                        sx={{
                          width: "100%",
                        }}
                        type="number"
                        name="phone_number"
                        required
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <TextField
                        id="outlined-multiline-static"
                        label="Additional Details"
                        multiline
                        rows={4}
                        defaultValue=""
                        sx={{
                          width: "100%",
                        }}
                        name="message"
                        required
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {showMessage && (
                <p className="text-red-700 mt-2">
                  Please choose some destinations
                </p>
              )}
              <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  sx={{ paddingX: "30px" }}
                  onClick={() => {
                    checkTheChoosePlaces();
                  }}
                >
                  send an email
                </Button>

                <div>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={open}
                    onClick={handleClose}
                  >
                    <Alert severity="success" sx={{ width: "50%" }}>
                      {" "}
                      Thank you for sharing your desired destinations with us!
                      I'll get back to you via email as soon as possible to
                      discuss your travel plans further. Your adventure awaits!
                    </Alert>
                  </Backdrop>
                </div>
              </Stack>
            </form>
            {/* <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                onClick={confirmButtonClickHandler}
                sx={{ paddingX: "30px" }}
              >
                send an email
              </Button>
            </Stack>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
