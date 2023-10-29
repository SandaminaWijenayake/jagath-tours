import React from "react";
import image from "../images/New folder/edit2height.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactUs = () => {
  return (
    <>
      <div className="absolute text-white top-1/4 left-1/3 text-5xl font-sans  font-semibold  text-center">
        <p className="text-5xl font-light mb-0">LET'S KEEP IN TOUCH</p>
        <h1 className="text-7xl font-bold">CONTACT US</h1>
      </div>
      <div className="overflow-hidden mb-16">
        <img src={image} alt="" className="" />
      </div>
      <div className="flex w-5/6 m-auto">
        <div className="w-1/2 mr-10">
          <h1 className="text-5xl font-bold mb-10">Get in touch</h1>
          <p className="text-xl text-gray-700">
            We'd love to hear from you! For any questions, travel inquiries, or
            special requests, our team is ready to assist. Reach out to us to
            start planning your next unforgettable journey. Contact us today.
          </p>
          <div className="mt-10">
            <div className="flex my-5">
              <ApartmentIcon fontSize="large" />
              <p className="ml-5 translate-y-1">545, Kaluwamodara, Aluthgama</p>
            </div>
            <div className="flex my-5">
              <LocalPhoneIcon fontSize="large" />{" "}
              <p className="ml-5 translate-y-1">+94 77 902 7052</p>
            </div>
            <div className="flex my-5">
              <EmailIcon fontSize="large" />
              <p className="ml-5 translate-y-1">geniuslankatours@gmail.com </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-10">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>{" "}
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Phone number"
                    variant="outlined"
                    sx={{
                      width: "100%",
                    }}
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
                    defaultValue="Message"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <div className="mt-5 flex justify-end">
            <Button variant="contained">send message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
