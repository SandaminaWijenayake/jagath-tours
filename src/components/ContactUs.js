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

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";

// snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//form

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactUs = () => {
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="font-Merriweather">
      <div className=" font-semibold mt-32 text-center">
        <p className="lg:text-6xl text-4xl font-light mb-0">
          LET'S KEEP IN TOUCH
        </p>
        <h1 className="lg:text-8xl text-4xl font-bold text-blue-900">
          CONTACT US
        </h1>
      </div>
      <div className="overflow-hidden mb-16 mt-5 lg:h-96 lg:w-10/12 m-auto lg:rounded-full rounded-s-full">
        <img src={image} alt="" className="object-cover w-full" />
      </div>
      <div className="lg:flex w-5/6 m-auto">
        <div className="lg:w-1/2 lg:mr-10 md:text-sm text-xs text-gray-600 font-light">
          <h1 className="text-4xl font-semibold my-5  text-blue-900 text-center md:text-left">
            Get in touch
          </h1>
          <p className=" text-gray-700 text-justify">
            We'd love to hear from you! For any questions, travel inquiries, or
            special requests, our team is ready to assist. Reach out to us to
            start planning your next unforgettable journey. Contact us today.
          </p>
          <div className="mt-10 text-xs">
            <div className="flex my-5">
              <ApartmentIcon fontSize="small" />
              <p className="ml-5 -translate-y-1">
                268/2, Jayasuriya Building, Galle Road, Alutgama, Sri Lanka
              </p>
            </div>
            <div className="flex my-5">
              <LocalPhoneIcon fontSize="small" />{" "}
              <p className="ml-5 -translate-y-1">
                Whatsapp / Mobile : +94 77 902 7052
              </p>
            </div>
            <div className="flex my-5">
              <LocalPhoneIcon fontSize="small" />{" "}
              <p className="ml-5 -translate-y-1">HotLine : +94 76 663 9599</p>
            </div>
            <div className="flex my-5">
              <EmailIcon fontSize="small" />
              <p className="ml-2  sm:ml-5 -translate-y-1">
                geniuslankatours01@gmail.com
              </p>
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
              <Stack spacing={2} sx={{ width: "100%" }}>
                <Button variant="contained" type="submit">
                  send message
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    The message sent successfully.
                  </Alert>
                </Snackbar>
              </Stack>
            </div>
          </form>
          <div>{/* <Lottie animationData={animationData} /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
