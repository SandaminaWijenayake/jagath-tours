import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

//Tangalla
import Tangalla from "../images/photosgeniuslankatours/Tangalla/Tangalle-Beach-scaled.png";
import Tangalla_1 from "../images/photosgeniuslankatours/Tangalla/Tangalle-Beach-Top-Sri-Lanka.jpg";
import Tangalla_2 from "../images/photosgeniuslankatours/Tangalla/Tangalle_srilanka-2-1024x713.jpg";
import Tangalla_3 from "../images/photosgeniuslankatours/Tangalla/cover-Places-To-Visit-In-Tangalle.png";
import Tangalla_4 from "../images/photosgeniuslankatours/Tangalla/mainpool-amanwella-sri-lanka-luxury-resort.png";

//Mirissa
import mirissa_1 from "../images/photosgeniuslankatours/mirissa/mirissa_1.jpg";
import mirissa_2 from "../images/photosgeniuslankatours/mirissa/mirissa_2.jpg";
import mirissa_3 from "../images/photosgeniuslankatours/mirissa/mirissa_3.jpg";
import mirissa_4 from "../images/photosgeniuslankatours/mirissa/mirissa_4.jpg";
import mirissa_5 from "../images/photosgeniuslankatours/mirissa/Mirissa_5.jpg";

//Galle and UnaWatuna
import galle from "../images/photosgeniuslankatours/Galle and Unawatuna/Jungle-Beach-Bay-Drone-Shot.jpg";
import galle_1 from "../images/photosgeniuslankatours/Galle and Unawatuna/9020407725134748720901393412427632082419712n_20220727171514.jpeg";
import galle_2 from "../images/photosgeniuslankatours/Galle and Unawatuna/Wijaya_beach_Unawatuna_Sri_Lanka.jpg";
import galle_3 from "../images/photosgeniuslankatours/Galle and Unawatuna/d738ef59453b5c64f8c2181d08c551f2.jpg";
import galle_4 from "../images/photosgeniuslankatours/Galle and Unawatuna/things-to-do-unawatuna-sri-lanka-beach-header.jpg";
import galle_5 from "../images/photosgeniuslankatours/Galle and Unawatuna/unawatuna-sri-lanka.jpg";

//Hikkaduwa
import Hikkaduwa from "../images/photosgeniuslankatours/Hikkaduwa/hikkaduwa-marine-national-park-sri-lanka-5-1.jpg";
import Hikkaduwa_1 from "../images/photosgeniuslankatours/Hikkaduwa/1_ZHsmCK7vbo-P_ZLsqU1zhQ.jpg";
import Hikkaduwa_2 from "../images/photosgeniuslankatours/Hikkaduwa/P1130084.jpg";
import Hikkaduwa_3 from "../images/photosgeniuslankatours/Hikkaduwa/5f873fa6485e2a69282b349417a606b6.jpg";
import Hikkaduwa_4 from "../images/photosgeniuslankatours/Hikkaduwa/122-1024x679-1.jpg";
import Hikkaduwa_5 from "../images/photosgeniuslankatours/Hikkaduwa/what-to-do-in-hikkaduwa-hero.jpg";

//bentota
import bentota_1 from "../images/photosgeniuslankatours/Bentota/bentota_1.jpg";
import bentota_2 from "../images/photosgeniuslankatours/Bentota/bentota_2.jpg";
import bentota_3 from "../images/photosgeniuslankatours/Bentota/bentota_3.jpg";
import bentota_4 from "../images/photosgeniuslankatours/Bentota/bentota_4.jpg";
import bentota_5 from "../images/photosgeniuslankatours/Bentota/bentota_5.png";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventNoteIcon from "@mui/icons-material/EventNote";
import StarIcon from "@mui/icons-material/Star";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Alert from "@mui/material/Alert";

const itemData = [
  {
    img: Tangalla_1,
  },
  {
    img: Tangalla_2,
  },
  {
    img: Tangalla_3,
  },
  {
    img: Tangalla_4,
  },
];

//itemDataMirissa
const itemDataMirissa = [
  {
    img: mirissa_2,
  },
  {
    img: mirissa_3,
  },
  {
    img: mirissa_4,
  },
  {
    img: mirissa_5,
  },
];

//itemDataNuwaraEliya

const itemDataNuwaraEliya = [
  {
    img: galle_3,
  },
  {
    img: galle_4,
  },
  {
    img: galle_5,
  },
  {
    img: galle_1,
  },
];

const itemDataHikkaduwa = [
  {
    img: Hikkaduwa_1,
  },
  {
    img: Hikkaduwa_4,
  },
  {
    img: Hikkaduwa_3,
  },
  {
    img: Hikkaduwa_2,
  },
  {
    img: Hikkaduwa_5,
  },
];

const itemDataBentota = [
  {
    img: bentota_2,
  },
  {
    img: bentota_3,
  },
  {
    img: bentota_4,
  },
  {
    img: bentota_5,
  },
];

const iconColors = {
  marginBottom: "8px",
  marginRight: "5px",
  color: "rgb(3 105 161)",
};

const BeachStaying = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_number: "",
    message: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // sanda - https://formspree.io/f/meoeybyg
    // jagath - https://formspree.io/f/movjnbwl
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="font-Merriweather text-xs md:text-base leading-5 md:leading-6 text-gray-600">
      <div className="py-14 w-3/4 m-auto">
        <h1 className="sm:text-5xl text-4xl font-bold  lg:mt-20 mt-16 lg:text-left text-center">
          Genius Lanka tours packages
        </h1>
      </div>
      <h1 className="w-3/4 hidden md:block my-10 md:text-left m-auto text-2xl  font-bold text-center sm:text-3xl border-b-2 text-blue-900">
        Tour Package Beach Staying
      </h1>
      <div className="w-11/12 m-auto md:hidden">
        <ul className="list-disc marker:text-sky-500 text-xl pl-5">
          <li>day 01 - Tangalle</li>
          <li>day 02 - Mirissa</li>
          <li>day 03 - Galle and Unawatuna</li>
          <li>day 04 - Hikkaduwa</li>
          <li>day 05 - Bentota</li>
          <li>day 06 - Induruwa</li>
        </ul>
      </div>
      <div>
        {/* <div className="md:mt-20 mt-16">
          <h1 className="my-12 md:text-left md:w-3/4 w-11/12 m-auto text-center  text-4xl font-semibold border-b-2">
            Detailed Itinerary
          </h1>
        </div> */}
        <div>
          <h1 className="mb-12 text-left w-3/4 m-auto text-4xl mt-10 md:mt-0  font-semibold">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Tangalle
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={Tangalla}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            Tangalla is a picturesque town located on the southern coast of Sri
            Lanka. Known for its stunning beaches, Tangalla offers a serene and
            tranquil atmosphere, making it a popular destination for travelers
            seeking relaxation and natural beauty. The area boasts pristine
            stretches of golden sand, crystal-clear waters ideal for swimming,
            surfing, and snorkeling, and is also home to diverse wildlife,
            including sea turtles. Tangalla's charm lies in its laid-back vibe,
            friendly locals, and the opportunity to experience a quieter side of
            Sri Lanka's coastal splendor.
          </p>

          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Tangalla Highlights
            </h1>
            <div>
              <ImageList sx={{ width: "100%", height: 450 }}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={<span>{item.author}</span>}
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="mb-12 text-left w-3/4 m-auto  text-4xl">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Mirissa
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={mirissa_1}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            Mirissa has without doubt the best beach in the Deep South of Sri
            Lanka. The ever smiling, mischievous dolphins will put on a show
            while some of the oldest and the largest sea creatures, the humpback
            and the blue whales, can be witness in this area making the ideal
            locations for whale watching. Mirissa is the largest fishing port on
            the south coast and is known for its tuna, mullet, snapper and
            butterfish. Mirissa is good location for snorkeling, diving and
            surfing. Mirissa consists of secluded crescent shaped beaches and
            the shoreline is blanketed with a long line of coconut trees. This
            destination has become the place of choice for tourist.
          </p>

          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Mirissa Highlights
            </h1>
            <ImageList sx={{ width: "100%", height: 450 }}>
              {itemDataMirissa.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="mb-12 md:text-left text-center w-3/4 m-auto font-semibold text-4xl">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Galle and Unawatuna
          </h1>

          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={galle}
            alt=""
          />
          <p className="pt-10 md:w-3/5 w-11/12 m-auto text-justify border-t-2">
            Galle is a historic city situated on the southwestern coast of Sri
            Lanka. Its main attraction is the UNESCO World Heritage Site, Galle
            Fort, a 16th-century Portuguese-Dutch fortress characterized by its
            colonial architecture, cobblestone streets, and impressive ramparts
            overlooking the Indian Ocean. The city itself showcases a blend of
            European and South Asian influences, with charming boutiques,
            galleries, and cafes within the fort walls. Beyond the fort, Galle
            offers beautiful beaches, cultural experiences, and a rich history.
          </p>
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-b-2">
            Unawatuna, located near Galle, is renowned for its stunning
            crescent-shaped beach and vibrant beachfront scene. It's a popular
            tourist destination offering a relaxed atmosphere, water sports like
            snorkeling and diving, beachside restaurants serving fresh seafood,
            and a range of accommodations from budget-friendly to luxurious. The
            area also has lush greenery, making it an inviting spot for nature
            lovers.
          </p>

          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Galle and Unawatuna Highlights
            </h1>
            <ImageList sx={{ width: "100%", height: 450 }}>
              {itemDataNuwaraEliya.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="mb-12 text-left w-3/4 m-auto font-semibold text-4xl">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Hikkaduwa
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={Hikkaduwa}
            alt=""
          />
          <p className="pt-10 md:w-3/5 w-11/12 m-auto text-justify border-t-2">
            Hikkaduwa is a lively coastal town on the southwest coast of Sri
            Lanka, known for its vibrant beach culture and beautiful stretches
            of golden sand. This popular tourist destination offers a blend of
            relaxation and entertainment, with a long palm-fringed beach that
            attracts sun-seekers, surfers, and snorkelers alike.
          </p>
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-b-2">
            The town is renowned for its coral reefs, making it a hotspot for
            snorkeling and diving enthusiasts who come to explore the diverse
            marine life. Hikkaduwa also boasts a bustling beachfront with
            restaurants, bars, and shops, creating a lively atmosphere
            especially during the peak tourist seasons. The town's nightlife
            offers a mix of beach parties and laid-back bars where travelers can
            unwind after a day of beach activities.
          </p>

          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Hikkaduwa Highlights
            </h1>
            <ImageList sx={{ width: "100%", height: 450 }}>
              {itemDataHikkaduwa.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="mb-12 text-left w-3/4 m-auto font-semibold text-4xl">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            BENTOTA
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={bentota_1}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            Bentota is a small resort town by the southern coastal belt of Sri
            Lanka. Cycle around the vibrant town and try out delicious Sri
            Lankan seafood. Connect with turtles in a turtle sanctuary and
            release baby turtles back to the sea. You can also explore a
            historical chapter of Sri Lanka in “Kande Viharaya” (Buddhist
            temple). What more? Trek through nature trails, paddle through
            mangroves at Madu River and sightsee the photogenic stilt fishermen
            in Sri Lanka! This picture-perfect town will be a highlight in your
            itinerary as you will experience the gifts of nature every minute of
            your stay!
          </p>

          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Bentota Highlights
            </h1>
            <ImageList sx={{ width: "100%", height: 450 }}>
              {itemDataBentota.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>{item.author}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
        <div className="mt-20">
          <h1 className="mb-12 text-left w-3/4 m-auto font-semibold text-4xl">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Departure
          </h1>
          <div className="md:w-3/4 w-11/12 m-auto">
            {/* <h1 className="my-12 md:text-left text-center text-3xl md:text-4xl">
                  <EventNoteIcon fontSize="large" sx={iconColors} />
                  Day 08 Program - Departure
                </h1> */}
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>
                After the breakfast at the hotel, proceed to Colombo and Enjoy
                City Tour, Evening proceeds to Airport
              </li>
              <li>Good bye from Genius Lanka Tours</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-9/12 font-Montserrat py-20  w-11/12 m-auto ">
          <div className="pb-10">
            <h1 className="text-[64px] font-semibold inline-block">
              Book this tour now
            </h1>
          </div>
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
                    label="Package Name"
                    variant="outlined"
                    disabled
                    sx={{ width: "100%" }}
                    type="text"
                    name="package_name"
                    value="Beach Staying"
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

export default BeachStaying;
