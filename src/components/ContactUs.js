import React, { useRef } from "react";
import image from "../images/New folder/contact.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Lottie from "lottie-react";
import animationData from "../images/svg/Animation - 1698642072236.json";
//form
import emailjs from "@emailjs/browser";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_efkbr9o",
        "template_hqtveuo",
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

  return (
    <div className="font-Roboto">
      <div className=" font-Roboto font-semibold mt-32 text-center">
        <p className="lg:text-6xl text-4xl font-light mb-0">
          LET'S KEEP IN TOUCH
        </p>
        <h1 className="lg:text-8xl text-5xl font-bold">CONTACT US</h1>
      </div>
      <div className="overflow-hidden mb-16 mt-5 lg:h-96 lg:w-10/12 m-auto lg:rounded-full rounded-s-full">
        <img src={image} alt="" className="object-cover w-full" />
      </div>
      <div className="lg:flex w-5/6 m-auto">
        <div className="lg:w-1/2 lg:mr-10">
          <h1 className="text-4xl font-semibold my-5 font-Roboto">
            Get in touch
          </h1>
          <p className="text-xl text-gray-700 text-justify">
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
        <div className="lg:w-1/2 lg:ml-10 w-11/12 m-auto">
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
            <div className="mt-5 flex justify-center lg:justify-end">
              <Button variant="contained" type="submit">
                send message
              </Button>
            </div>
          </form>

          <div>{/* <Lottie animationData={animationData} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
