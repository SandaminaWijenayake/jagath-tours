import React from "react";
import "./packages.css";

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

//yala
import yala_1 from "../images/photosgeniuslankatours/yala/yala_1.jpg";
import yala_2 from "../images/photosgeniuslankatours/yala/yala-2.jpeg";
import yala_3 from "../images/photosgeniuslankatours/yala/yala_3.jpg";
import yala_4 from "../images/photosgeniuslankatours/yala/yala_4.jpg";
import yala_5 from "../images/photosgeniuslankatours/yala/yala_5.jpg";
import yala_next from "../images/photosgeniuslankatours/yala/yala-slider1.jpg";
import yala_6 from "../images/photosgeniuslankatours/yala/yala_6.jpg";

//mirissa
import mirissa_1 from "../images/photosgeniuslankatours/mirissa/mirissa_1.jpg";
import mirissa_2 from "../images/photosgeniuslankatours/mirissa/mirissa_2.jpg";
import mirissa_3 from "../images/photosgeniuslankatours/mirissa/mirissa_3.jpg";
import mirissa_4 from "../images/photosgeniuslankatours/mirissa/mirissa_4.jpg";
import mirissa_5 from "../images/photosgeniuslankatours/mirissa/Mirissa_5.jpg";

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

//itemDataYala

const itemDataYala = [
  {
    img: yala_1,
  },
  {
    img: yala_2,
  },
  {
    img: yala_4,
  },
  {
    img: yala_next,
  },
  {
    img: yala_5,
  },
  {
    img: yala_6,
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

const Packages = () => {
  return (
    <div className="font-Roboto">
      <div className="py-14 w-3/4 m-auto">
        <h1 className="sm:text-6xl text-4xl font-bold font-manrope lg:mt-20 mt-16 lg:text-left text-center">
          Genius Lanka Tours packages
        </h1>
      </div>
      <div className="w-11/12 m-auto md:hidden">
        <ul className="list-disc marker:text-sky-500 text-xl pl-5">
          <li>day 01 - Sigiriya</li>
          <li>day 02 - kandy</li>
          <li>day 03 - Nuwara Eliya</li>
          <li>day 04 - Yala</li>
          <li>day 05 and 06 - Mirissa</li>
          <li>day 07 - Bentota</li>
        </ul>
      </div>
      <div className="w-3/4 m-auto hidden md:block">
        <h1 className="my-10 md:text-left font-manrope m-auto text-2xl text-center sm:text-4xl border-b-2">
          Tour Package 7 Days (6 Nights Tour Packages)
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
            <td className="text-sm font-bold text-center">Yala</td>
            <td>
              <ul className="px-5  text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Village Life</li>
                <li>Wildlife</li>
              </ul>
            </td>
            <td>
              <ul className="px-5 grid grid-cols-2 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Capture the Leopards</li>
                <li>Yala National Park Safari</li>
                <li>Birds watching</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center text-sky-700 text-sm font-bold">
              Day 5 - 6
            </td>
            <td className="text-sm font-bold text-center">Mirissa</td>
            <td>
              <ul className="px-5  text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Beach</li>
                <li>Surfing</li>
              </ul>
            </td>
            <td>
              <ul className="px-5 grid grid-cols-2 text-xs font-bold text-gray-700  gap-x-4 gap-2 list-disc">
                <li>Coconut Tree hill </li>
                <li>Dolphin watching</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center text-sky-700 text-sm font-bold">
              Day 7
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
            YALA
          </h1>
          <img
            className="md:w-3/4 w-11/12 rounded-md md:rounded-none m-auto mb-12"
            src={yala_3}
            alt=""
          />
          <p className="py-10 md:w-3/5 w-11/12 m-auto text-justify border-y-2">
            The Yala National Park is the most famous wildlife sanctuary in Sri
            Lanka and this vast reserve is home to a multitude of fascinating
            wildlife as well as plant life. Deer, peacocks, wild boar, bears and
            herds of wild elephants are just some of the creatures that live
            here. Yala is also known as one of the best places to spot the ever
            illusive Sri Lankan leopard and is also home to an amazing array of
            endemic birds. Explore this amazing realm in a jeep safari escorted.
          </p>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl">
              {" "}
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 04 Program - Yala
            </h1>
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>
                After breakfast at the hotel proceed to Ella and enjoy
                attractions (If time permits)
              </li>
              <li>
                Hike Little Adam's Peak through a moderate hiking trail passing
                scenic tea plantations
              </li>
              <li>
                Ella is an ideal destination to spice up an adventure lover's
                holiday
              </li>
              <li>Visit the charming tea plantations in Ella</li>
              <li>Stop at Labukale tea garden on the way</li>
              <li>Take a refreshing dip in the foamy Ravana Falls</li>
              <li>
                Once completed Proceed to Yala and enjoy Wildlife safari.
                (Optional)
              </li>
              <li>
                Explore the Yala national park on a 3-4 hours safari ride
                exploring the exotic wildlife at the park
              </li>
              <li>
                Watch out for crocodiles during the jungle safari. Don't forget
                to capture them on your camera
              </li>
              <li>
                Speak to an experienced trekker to learn about the park and its
                endemic and non-endemic animals and bird species
              </li>
              <li>
                Yala is also popular for its elephants. Be prepared to witness
                the giants on land, right next to your safari jeep
              </li>
              <li>
                Be always ready to capture a peacock dance with your camera
              </li>
              <li>
                Keep your eyes peeled to capture the glimpse of elusive leopards
              </li>
              <li>Check in to the hotel & Relax</li>
            </ul>
          </div>
          <div className="md:w-3/4 w-11/12 m-auto">
            <h1 className="my-12 md:text-left text-center text-4xl border-b-2">
              <StarIcon fontSize="large" sx={iconColors} />
              Yala Highlights
            </h1>
            <div>
              <ImageList sx={{ width: "100%", height: 450 }}>
                {itemDataYala.map((item) => (
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
          <h1 className="mb-12 text-left w-3/4 m-auto font-semibold text-4xl">
            <LocationOnIcon fontSize="large" sx={iconColors} />
            MIRISSA
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
            <h1 className="my-12 md:text-left text-center text-4xl">
              <EventNoteIcon fontSize="large" sx={iconColors} />
              Day 05 Program - Mirissa
            </h1>
            <ul className="list-disc marker:text-sky-500 list-outside pl-5 md:pl-0">
              <li>After the breakfast at hotel proceed to Mirissa</li>
              <li>
                Be a part of the most spectacular dolphin watching experience in
                Sri Lanka at Dolphin Beach where you will see dozens of dolphins
                in large pods. (Season is November to April)
              </li>
              <li>
                Mirissa is famous for water sports. Jet ski, banana & tube
                boating, diving, snorkeling, kite surfing, deep sea fishing are
                a few that are popular.
              </li>
              <li>
                Wanna have something unforgettable to memorize about your loving
                journey in Sri Lanka? Then don't forget to drop by Coconut tree
                hill with your camera
              </li>
              <li>
                Just a tiny little hidden beach with a bay area around the
                corner of the town has become one of the most visited places in
                Mirissa. Natives called it a
              </li>
              <li>
                Mirissa is an ideal spot to experience a few rare species of
                turtles. You are blessed enough to have a great opportunity to
                swim with them while feeding them your own, we called it "turtle
                snorkeling" (Optional)
              </li>
              <li>Why don't you take a few minutes to climb up</li>
              <li>
                Better not to forget to enjoy an evening walk to nonsleeping
                Mirissa City, which will offer you hundreds of fabulous
                restaurants & cafe options all around the city. just feel the
                vibes!
              </li>
              <li>
                Experience surfing in one of the finest surfing destinations in
                the world.
              </li>
              <li>
                Take a stroll along the calming beach and enjoy the spectacular
                sunset.
              </li>
              <li>Check in to the hotel & Relax.</li>
            </ul>
          </div>
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
        <div className="md:w-3/4 w-11/12 m-auto">
          <h1 className="my-12 md:text-left text-center text-4xl">
            {" "}
            <EventNoteIcon fontSize="large" sx={iconColors} />
            Day 06 Program - Mirissa
          </h1>
          <ul className="list-disc">
            <li>After the breakfast at hotel proceed to Mirissa</li>
          </ul>
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
      </div>
    </div>
  );
};

export default Packages;
