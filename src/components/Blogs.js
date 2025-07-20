import React from "react";
import beach_2 from "../images/beach-2.jpeg";
import beach_3 from "../images/blogImages/beach-3.webp";
import elephant from "../images/blogImages/elephant.webp";
import train from "../images/train.jpeg";
import perahara from "../images/blogImages/perahara.webp";
import oruva from "../images/photosgeniuslankatours/sigiriya/sigiriya_boat_ride.jpg";
import watar_rift from "../images/New folder/activity_4.jpg";
import bentota from "../images/photosgeniuslankatours/Bentota/bentota_1.jpg";
import shiva from "../images/blogImages/Hindu+Coin+Offerings+-+Trincomalee.webp";

import lotus from "../images/blogImages/colombo-3.webp";

const Blogs = () => {
  return (
    <div className="xl:w-4/5 w-full m-auto py-2 mt-20 font-Montserrat">
      <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Montserrat py-2">
        Popular Destinations
      </h1>

      <p className="text-gray-700 max-w-4xl font-Montserrat  text-center text-base lg:text-lg mx-auto mt-3 mb-16">
        You are the type of person who wants to take amazing unique
        vacations-the kink where luxury meets authentic, and each experience
        above all else and are differentiated by serving their needs first - we
        want to make their hectic and stressful lives easier by enabling them to
        forcus on enjoying their vacation and ensuring they get the most.
      </p>
      <div className="lg:grid lg:grid-flow-row grid-cols-3 lg:gap-5 mt-16">
        <div className="col-span-2 row-span-2 relative ">
          <img src={beach_3} alt="" className="h-full rounded-md block " />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center ">
              <h1 className="text-xs md:text-xl font-bold">
                Hiriketiya, Matara
              </h1>

              <p className="md:block hidden  md:text-base md:w-10/12 text-center ">
                For bohemian surf chic there is only once choice on the south
                coast: Hiriketiya. “Hiri” has really taken off in recent years,
                with boutique hotels, craft shops, yoga workshops and cafés
                serving flat whites and vegan burgers springing up to keep
                bronzed and buffed surfers entertained when they're on land. The
                beautiful beach curves around a sheltered horseshoe bay, making
                Hiri a great spot for swimming too.
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-2 relative">
          <img src={lotus} alt="" className="h-full rounded-md mt-2 lg:mt-0" />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white   text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0">
              <h1 className="text-xl font-bold">Lotus tower, Colombo</h1>
              <p className="md:block hidden text-base w-10/12 text-center">
                The Colombo Lotus Tower, standing at 356 meters, is Sri Lanka's
                tallest structure. Serving as a telecommunications and
                observation tower, it offers panoramic views, entertainment
                facilities, and a symbol of modernity in Colombo's skyline.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={oruva}
            alt=""
            className="h-full w-full rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold">Sigiriya boat ride</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                While Sigiriya is famous for its ancient rock fortress, nearby
                lakes offer serene boat rides. Visitors can enjoy scenic views
                of lush landscapes and glimpse wildlife while experiencing a
                tranquil excursion.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={elephant}
            alt=""
            className="h-full rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold"> Yala</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                Yala National Park is renowned for its diverse wildlife,
                including leopards, elephants, and birds. Its picturesque
                landscapes and safari adventures make it a popular destination
                for nature enthusiasts.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={perahara}
            alt=""
            className="sm:h-full w-full object-cover rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold">Kandy Perahera, Kandy</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                The Kandy Perahera is a spectacular annual procession in Sri
                Lanka, showcasing traditional dance, music, and beautifully
                adorned elephants. It honors the sacred Tooth Relic of the
                Buddha and attracts visitors worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={train}
            alt=""
            className="sm:h-full w-full object-cover rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold"> Way to Nuwara Eliya</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                The journey to Nuwara Eliya, Sri Lanka's charming hill station,
                winds through picturesque tea plantations and misty mountains.
                Travelers can enjoy scenic train rides or drive along winding
                roads with stunning vistas.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="col-span-2 relative">
          <img
            src={watar_rift}
            alt=""
            className="sm:h-full h-52 object-cover rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold">Water rafting in Kithulgala</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                Kithulgala is a thrilling destination for water rafting
                enthusiasts. The Kelani River's rapids offer exciting challenges
                amidst breathtaking jungle scenery, providing an unforgettable
                adventure in nature.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 relative">
          <img
            src={bentota}
            alt=""
            className="sm:h-full w-full object-cover rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold">Bentota</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                Bentota, famed for its serene beaches and water sports, offers a
                tranquil escape for travelers. With its palm-fringed coastline
                and a range of aquatic activities, it's a favored spot for those
                seeking relaxation and adventure by the sea.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative">
          <img
            src={shiva}
            alt=""
            className="sm:h-full w-full object-cover rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold">Trincomalee</h1>

              <p className="md:block hidden text-base w-10/12 text-center ">
                Trincomalee boasts stunning beaches and lively water activities,
                offering a coastal escape for both relaxation and adventure.
                With swaying palms and crystal shores, it's a paradise for those
                seeking serenity or thrills by the sea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
