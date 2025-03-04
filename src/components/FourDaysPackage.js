import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

//sigiriya
import sigiriya from "../images/photosgeniuslankatours/sigiriya/sigiriya_rock_2.jpg";
import sigiriya_1 from "../images/photosgeniuslankatours/sigiriya/sigiriya-1.png";
import rockTemple from "../images/photosgeniuslankatours/sigiriya/Dambulla-Cave-temple-Culturale-Triangle-sri-lanka.jpg";
import sigiriya_boat_ride from "../images/photosgeniuslankatours/sigiriya/sigiriya_boat_ride.jpg";
import piduruthalagala_hike from "../images/photosgeniuslankatours/sigiriya/Pidurangala_Hike.jpg";

//kandy
import thetempleoftooth from "../images/photosgeniuslankatours/kandy/the-temple-of-tooth.jpg";
import kandy from "../images/photosgeniuslankatours/kandy/kandy.jpg";
import kandy_1 from "../images/photosgeniuslankatours/kandy/kandy_1.jpg";
import kandy_2 from "../images/photosgeniuslankatours/kandy/kandy_2.jpg";
import kandy_3 from "../images/photosgeniuslankatours/kandy/kandy_3.jpg";

//Nuwara Eliya
import nuwaraEliya from "../images/photosgeniuslankatours/nuwara eliya/nuwara_eliya.jpg";
import nuwara_eliya_1 from "../images/photosgeniuslankatours/nuwara eliya/nuwara_eliya_1.jpg";
import nuwara_eliya_2 from "../images/photosgeniuslankatours/nuwara eliya/Nuwaraeliya_2.jpg";
import nuwara_eliya_post from "../images/photosgeniuslankatours/nuwara eliya/Nuwara_Eliya_Post_Office.jpg";
import nuwara_eliya_places from "../images/photosgeniuslankatours/nuwara eliya/nuwara-eliya-places-to-visit.jpg";
import nuwara_eliya_4 from "../images/photosgeniuslankatours/nuwara eliya/nuwaraeliya_4.jpg";

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
    img: sigiriya_1,
  },
  {
    img: sigiriya_boat_ride,
  },
  {
    img: rockTemple,
  },
  {
    img: piduruthalagala_hike,
  },
];

//itemDatakandy
const itemDataKandy = [
  {
    img: kandy,
  },
  {
    img: kandy_1,
  },
  {
    img: kandy_2,
  },
  {
    img: kandy_3,
  },
];

//itemDataNuwaraEliya

const itemDataNuwaraEliya = [
  {
    img: nuwaraEliya,
  },
  {
    img: nuwara_eliya_1,
  },
  {
    img: nuwara_eliya_post,
  },
  {
    img: nuwara_eliya_places,
  },
  {
    img: nuwara_eliya_4,
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

const FourDaysPackage = () => {
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
    <div className="font-Montserrat">
      <div className="py-14 w-3/4 m-auto">
        <h1 className="sm:text-6xl text-4xl font-bold font-Montserrat lg:mt-20 mt-16 lg:text-left text-center">
          Genius Lanka Tours packages
        </h1>
      </div>
      <div className="w-11/12 m-auto md:hidden">
        <ul className="list-disc marker:text-sky-500 text-xl pl-5">
          <li>day 01 - Sigiriya</li>
          <li>day 02 - kandy</li>
          <li>day 03 - Nuwara Eliya</li>
          <li>day 04 - Bentota</li>
        </ul>
      </div>
      <div className="w-3/4 m-auto hidden md:block">
        <h1 className="my-10 md:text-left font-Montserrat m-auto text-2xl text-center sm:text-4xl border-b-2">
          Tour Package 4 Days (Three Nights Tour Packages)
        </h1>
        <table id="packageTable">
          <tr className="font-semibold">
            <th className="w-28 text-sm font-bold">Day</th>
            <th className="w-28 text-sm font-bold">City</th>
            <th className="text-sm font-bold">Theme</th>
            <th className="text-sm font-bold">Key Activities</th>
          </tr>
          <tr>
            <td className="text-center text-sky-700 text-sm font-bold">
              Day 1
            </td>
            <td className="text-sm font-bold text-black text-center">
              Sigiriya
            </td>
            <td>
              <ul className="px-5 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Culture</li>
                <li>Village life</li>
              </ul>
            </td>
            <td>
              <ul className="px-5 grid grid-cols-2 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Temple of the Tooth Relic</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center text-sky-700 text-sm font-bold">
              {" "}
              Day 2
            </td>
            <td className="text-sm font-bold text-center">Kandy</td>
            <td>
              <ul className="px-5 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Calture</li>
                <li>Histroy</li>
              </ul>
            </td>
            <td>
              <ul className="px-5 grid grid-cols-2 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Visit the Temple of the Tooth (Sri Dalada Maligawa)</li>
                <li>Spice village tour</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center text-sky-700 text-sm font-bold">
              Day 3
            </td>
            <td className="text-sm font-bold text-center">Nuwara Eliya</td>
            <td>
              <ul className="px-5 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Hiking</li>
                <li>Tea</li>
              </ul>
            </td>
            <td>
              <ul className="px-5 grid grid-cols-2 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc"></ul>
            </td>
          </tr>

          <tr>
            <td className="text-center text-sky-700 text-sm font-bold">
              Day 4
            </td>
            <td className="text-sm font-bold text-center">Bentota</td>
            <td>
              <ul className="px-5 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Beach</li>
                <li>Water Sports</li>
              </ul>
            </td>
            <td>
              <ul className="px-5 grid grid-cols-2 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Water sport</li>
                <li>Sri Lankan turtles</li>
                <li>Fish therapy </li>
                <li>Boat ride in Madu River</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <div className="md:mt-20 mt-16">
          <h1 className="my-12 md:text-left md:w-3/4 w-11/12 m-auto text-center  text-4xl font-semibold border-b-2">
            Detailed Itinerary
          </h1>
        </div>
        <div>
          <h1 className="mb-12 text-left w-3/4 m-auto text-4xl  font-semibold">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Sigiriya
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={sigiriya}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            We guarantee that when you enter Sigiriya, you will feel like you
            are walking back in time to the age of the Kings and the Queens.
            This ancient city preserves monuments from our ancestors that date
            back to 2500 years. Visit the famous Sigiriya Rock Fortress and
            sightsee remnants of a prestigious history. Walk through the royal
            gardens and alternatively, hike Pidurangala Rock to view the
            stunning fortress from a different eye. Admire the luscious greenery
            and the tranquility of this beautiful village while devouring an
            authentic Sri Lankan village-style cuisine.
          </p>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl">
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 01 Program - Sigiriya
            </h1>
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>Arrival and assistant at the airport Proceed to Sigiriya</li>
              <li>
                Visit the Pinnawala Elephant orphanage to make friends with
                elephants
              </li>
              <li>
                Sri Lanka is one of the few destinations where you get to spend
                time with the majestic beast the elephant, bathing and feeding
                them are some of the few activities you will get to do
              </li>
              <li>Get to know about elephant dung products</li>
              <li>Once completed proceeds to Sigiriya</li>
              <li>
                Later in the afternoon, head to Pidurangala Rock, which offers
                stunning views of Sigiriya. Hike to the top and enjoy the
                panoramic vistas of the surrounding countryside.
              </li>
              <li>Check in to hotel in Sigiriya and stay relax.</li>
            </ul>
          </div>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Sigiriya Highlights
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
          <h1 className="mb-12 text-left w-3/4 m-auto  text-4xl   ">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            Kandy
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={thetempleoftooth}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            Explore the cultural capital of Sri Lanka and delve deep into the
            essence of the island. With mind-blowing scenery and well-preserved
            Sri Lankan culture and traditions, the city will surprise you at
            every corner. The temple of the tooth being the main attraction,
            Kandy has many interesting attractions, which include Udawaththa
            Kele Sanctuary, Kandy lake,and Bahirawa Kanda temple. Get a glimpse
            into the luxurious lives of the ancient king as you experience the
            authentic Sri Lankan culture while pampering yourself with modern
            luxuries and enjoying the cool climate and traditional values
          </p>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl">
              {" "}
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 02 Program - Kandy
            </h1>
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>After breakfast at the hotel enjoy Kandy city tour</li>
              <li>
                Experience the spice village tour and get to know about world
                famous Ceylon spices
              </li>
              <li>
                Wanna enjoy a bird's eye view over the Historic Kandy city
                center? Yes, today
              </li>
              <li>
                Explore the world-famous temple of the Tooth, the main
                attraction in Kandy
              </li>
              <li>
                Explore the Bahirawakanda Vihara Buddha Statue: Climb up to the
                hilltop where the magnificent Bahirawakanda Vihara Buddha Statue
                stands tall. Enjoy panoramic views of Kandy and pay your
                respects to the impressive Buddha statue.
              </li>
              <li>
                Take a Walk around Kandy Lake: This picturesque lake is located
                in the heart of the city and offers a peaceful escape from the
                bustling streets. Enjoy a leisurely walk, rent a paddleboat, or
                simply relax and take in the scenic views.
              </li>
              <li>
                Wander around the secluded nature of the Royal botanical garden
                in Kandy (Optional)
              </li>
              <li>
                Witness how Sri Lankan handicrafts and famous batiks are made
              </li>
              <li>Learn about the famous Ceylon Gems</li>
              <li>
                Watch a Cultural Performance: Experience the vibrant traditions
                of Sri Lanka by attending a cultural performance in Kandy. Enjoy
                traditional dance forms, mesmerizing drumming, and captivating
                costumes that showcase the rich cultural heritage of the countr
              </li>
            </ul>
          </div>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Kandy Highlights
            </h1>
            <ImageList sx={{ width: "100%", height: 450 }}>
              {itemDataKandy.map((item) => (
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
            NUWARA ELIYA
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={nuwara_eliya_2}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            In the central hills of the island rests the Nuwara Eliya city which
            is fondly known as 'Little England' as it resembles England in its
            cool climate and colonial-style bungalows. When you walk around this
            calm city, you will not be able to believe that this chilly climate
            is a part of tropical Sri Lanka and its sunny beaches. Bath in the
            natural pools of mesmerizing waterfalls, visit breezy tea estates,
            and explore the lush greenery that will surround you! Have a lovely
            stay in this city of wonder and get a chance to explore its hidden
            treasures!
          </p>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl">
              {" "}
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 03 Program - Nuwara Eliya
            </h1>
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>After breakfast at the hotel proceed to Nuwara Eliya</li>
              <li>
                En route, near Ramboda village, visit Shri Bhakta Hanuman Hindu
                Temple
              </li>
              <li>
                Prepare your cameras. Next stop will be at beautiful Ramboda
                waterfall
              </li>
              <li>
                Visit the impressive Ramboda Waterfall, one of the highest
                waterfalls in Sri Lanka. Admire the cascading water and capture
                memorable photographs.
              </li>
              <li>Stop at Labukale tea garden on the way</li>
              <li>
                Take a leisurely stroll through the charming streets of Nuwara
                Eliya, known as "Little England" due to its colonial
                architecture and cool climate. Admire the quaint cottages,
                well-manicured gardens, and beautiful parks
              </li>
              <li>
                Explore the quaint Seetha Amman Temple, believed to be the place
                where Sita, from the Hindu epic Ramayana, was held captive.
                Learn about the temple's significance and enjoy the peaceful
                surroundings.
              </li>
              <li>
                In the afternoon, visit a local strawberry farm and enjoy fresh
                strawberry juices/ shakes
              </li>
              <li>
                Take a serene walk through Gregory Park and watch the stunning
                sunset by the Lake Gregory
              </li>
              <li>
                Visit the picturesque Gregory Lake, where you can enjoy a
                leisurely boat ride or simply relax by the lakeside, taking in
                the tranquility of the surroundings.
              </li>
              <li>Check into the hotel in Nuwara Eliya and relax</li>
            </ul>
          </div>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Nuwara Eliya Highlights
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
            <h1 className="my-12 md:text-left text-center text-4xl">
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 07 Program - Bentota
            </h1>
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>
                After breakfast at the hotel proceed to Galle and enjoy city
                tour
              </li>
              <li>
                Stop by at The Galle Dutch Fort, a UNESCO World Heritage resting
                by the sea with dark stone walls
              </li>
              <li>
                Discover a exquisite collection of exhibits from the Portuguese,
                Dutch and British period at the National Museum of Galle
              </li>
              <li>
                Walk in the old post office, old library and old Dutch church to
                experience the city in its true sense
              </li>
              <li>
                Sightsee Galle Lighthouse, also known as Pointe de Galle Light
              </li>
              <li>Once completed proceeds to Bentota</li>
              <li>
                Bentota is famous for water sports. Jet ski, banana & tube
                boating, diving, snorkeling, deep sea fishing are a few that are
                popular
              </li>
              <li>
                Learn about Sri Lankan sea turtles at a turtle hatchery in
                Kosgoda
              </li>
              <li>
                Along the Madu River on the boat you will arrive to Fish farm
                and if interested get to try Sri Lankan fish therapy
              </li>
              <li>
                Next, go on an amazing boat ride in Madu River through
                eye-catching mangroves (aquatic trees in coastal waters)
              </li>
              <li>
                Take a stroll along the calming beach and enjoy the spectacular
                sunset
              </li>
              <li>Check in to the hotel & Relax</li>
            </ul>
          </div>
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
            <h1 className="my-12 md:text-left text-center text-3xl md:text-4xl">
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 08 Program - Departure
            </h1>
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
                    value="Four Days Package"
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

export default FourDaysPackage;
