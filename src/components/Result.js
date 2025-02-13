import React, { useContext, useState } from "react";
import { GlobleContext } from "../globleState/GlobleState"; // Assuming this is where select is from
import { useNavigate } from "react-router-dom";
import { Box, TextField, Grid, Button, Snackbar, Alert } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// Snackbar Alert
const blert = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Result = () => {
  const { select } = useContext(GlobleContext); // Assuming this is how you get select array
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start the loading spinner

    // Collecting form data
    const data = {
      ...formData,
      places: select.map((data) => data.Name).join(", "), // Places selected as string
    };

    // Sending the form data to Formspree
    const response = await fetch("https://formspree.io/f/movjnbwl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setOpen(true); // Show success alert
      setFormData({
        user_name: "",
        user_email: "",
        phone_number: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false); // Stop the loading spinner
  };

  return (
    <div className="w-4/5 m-auto font-Merriweather md:text-sm text-xs text-gray-600 font-light lg:py-36 py-20">
      <div className="md:flex">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold my-5  md:mb-5 text-center md:text-left">
            Chosen places
          </h1>
          {select.length === 0 ? (
            <div className="text-center">
              <h1>You haven't selected any places</h1>
              <Button onClick={() => navigate("/PlanningTool")}>
                Go back to choose places
              </Button>
            </div>
          ) : (
            <div>
              {select.map((data, index) => (
                <div key={index} className="py-2">
                  <h2>{data.Name}</h2> {/* Display selected places */}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2 leading-5">
          <p className="pt-4">
            Thank you for selecting your destinations! Please provide us with
            your contact information, and we'll get in touch soon to help you
            with your travel plans.
          </p>

          {/* Form for submitting */}
          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Email"
                    variant="outlined"
                    fullWidth
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
                    variant="outlined"
                    fullWidth
                    type="number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Additional Details"
                    multiline
                    rows={4}
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
            </Box>

            <Button
              variant="contained"
              type="submit"
              sx={{ paddingX: "30px", marginTop: "20px" }}
            >
              Send Email
            </Button>
          </form>

          {/* Backdrop for loading */}
          {loading && (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}

          {/* Display success or error message */}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Email sent successfully!
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default Result;
