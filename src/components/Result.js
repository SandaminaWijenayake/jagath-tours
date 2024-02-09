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

// emailJs
import emailjs from "@emailjs/browser";

const Result = () => {
  const { select, setSelect, chosenPlaces } = useContext(GlobleContext);
  const [places, setPlaces] = useState([]);
  const form = useRef();
  const [name, setName] = useState("");

  // useEffect(() => {
  //   select.forEach((data) => {
  //     setName(data.Name);
  //   });
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  useEffect(() => {
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

  return (
    <div className="w-4/5 m-auto font-Roboto lg:py-36 py-20">
      <div className="md:flex">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold my-5  md:mb-5 font-Roboto">
            Chosen places
          </h1>
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
          })}
        </div>
        <div className="md:w-1/2">
          <h1 className="lg:text-4xl text-3xl font-bold lg:my-5 md:mt-20">
            How everything started
          </h1>
          <p className="pt-4">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur.
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
                        label="Email"
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
                        label="Message"
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
              <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  sx={{ paddingX: "30px" }}
                >
                  send an email
                </Button>
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
            </Stack> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
