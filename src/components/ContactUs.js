import React, { useEffect, useState } from "react";
import image from "../images/New folder/contact.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

// Snackbar Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_number: "",
    message: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/meoeybyg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setOpen(true);
      setFormData({
        user_name: "",
        user_email: "",
        phone_number: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="font-Montserrat">
      <div className="font-semibold mt-32 text-center">
        <p className="lg:text-6xl text-4xl font-light mb-0">
          LET'S KEEP IN TOUCH
        </p>
        <h1 className="lg:text-8xl text-4xl font-bold text-black">
          CONTACT US
        </h1>
      </div>
      <div className="overflow-hidden mb-16 mt-5 lg:h-96 lg:w-10/12 m-auto lg:rounded-full rounded-s-full">
        <img src={image} alt="" className="object-cover w-full" />
      </div>
      <div className="lg:flex w-5/6 m-auto">
        <div className="lg:w-1/2 lg:mr-10  font-light">
          <h1 className="text-4xl font-semibold my-5 text-black text-center md:text-left">
            Get in touch
          </h1>
          <p className=" text-justify">
            We'd love to hear from you! For any questions, travel inquiries, or
            special requests, our team is ready to assist.
          </p>
          <div className="mt-10">
            <div className="flex my-5">
              <ApartmentIcon fontSize="small" color="#01b3a7" />
              <p className="ml-5">
                268/2, Jayasuriya Building, Alutgama, Sri Lanka
              </p>
            </div>
            <div className="flex my-5">
              <LocalPhoneIcon fontSize="small" />
              <p className="ml-5">Whatsapp / Mobile: +94 77 902 7052</p>
            </div>
            <div className="flex my-5">
              <EmailIcon fontSize="small" />
              <p className="ml-5">geniuslankatours01@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:ml-10 w-11/12 m-auto">
          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="filled"
                    sx={{ width: "100%" }}
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="filled"
                    sx={{ width: "100%" }}
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone number"
                    variant="filled"
                    sx={{ width: "100%" }}
                    type="number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="filled"
                  />
                </Grid>
              </Grid>
            </Box>
            <div className="mt-5 flex justify-center lg:justify-end">
              <button
                className="bg-[#01b3a7] text-white px-6 py-3 font-medium border-2 border-[#01b3a7] hover:border-black hover:bg-white hover:text-black"
                type="submit"
              >
                Send Message
              </button>
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
                  Message sent successfully!
                </Alert>
              </Snackbar>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
