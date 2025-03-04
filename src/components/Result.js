import React, { useContext, useState } from "react";
import { GlobleContext } from "../globleState/GlobleState"; // Assuming this is where select is from
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Grid,
  Button,
  Snackbar,
  Alert,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import { logDOM } from "@testing-library/react";

// Snackbar Alert
const blert = React.forwardRef(function Alert(props, ref) {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Result = () => {
  const { select, chosenPlaces, setSelect } = useContext(GlobleContext); // Assuming this is how you get select array
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
    const response = await fetch("https://formspree.io/f/meoeybyg", {
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

    setLoading(false);
  };

  const removePlaceHandler = (id) => {
    chosenPlaces.current = chosenPlaces.current.filter((item) => item !== id);
    setSelect((prevSelect) => prevSelect.filter((item) => item.id !== id));
  };
  return (
    <div className="w-4/5 m-auto font-Merriweather md:text-sm text-xs text-gray-600 font-light lg:py-36 py-20">
      <div className="md:flex">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold my-5  md:mb-5 text-center md:text-left">
            Chosen places
          </h1>
          {select.length === 0 ? (
            <div className="text-left">
              <h1>You haven't selected any places</h1>
              <h1
                className="text-[#01b3a7] hover:text-[#02C8BA] cursor-pointer underline mt-2"
                onClick={() => navigate("/PlanningTool")}
              >
                Go back to choose places
              </h1>
            </div>
          ) : (
            <Box className="w-full md:w-8/12 flex-grow overflow-y-auto space-y-3">
              {select.map((data) => (
                <Card
                  key={data.id}
                  sx={{
                    backgroundColor: "#E5F8F7",
                    padding: "8px",
                    boxShadow: "none",
                    width: "fullWidth",
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
                      onClick={() => removePlaceHandler(data.id)}
                    />
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </div>

        <div className="md:w-1/2 leading-5 font-Montserrat">
          <p className="py-4 text-sm font-normal">
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
              fullWidth
              sx={{
                marginTop: "16px",
                backgroundColor: "#01b3a7",
                "&:hover": { backgroundColor: "#02C8BA" },
                textTransform: "none",
              }}
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
