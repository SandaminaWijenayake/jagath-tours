import React from "react";
import beach_2 from "../images/beach-2.jpeg";
import beach_3 from "../images/beach-3.jpg";
import elephant from "../images/elephant.jpg";
import train from "../images/train.jpeg";
import perahara from "../images/perahara.png";
import oruva from "../images/photosgeniuslankatours/sigiriya/sigiriya_boat_ride.jpg";
import watar_rift from "../images/New folder/activity_4.jpg";
import lotus from "../images/photosgeniuslankatours/colombo/colombo-3.avif";

const Blogs = () => {
  return (
    <div className="w-4/5 m-auto mt-32 ">
      <div className="text-center"></div>
      <h1 className="md:text-4xl font-Roboto font-semibold text-center my-10">
        POPULAR DESTINATIONS TO GO
      </h1>
      <p className=" text-center font-Roboto">
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
              <h1 className="text-xl font-bold">Lotus tower</h1>
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
          <img src={oruva} alt="" className="h-full rounded-md mt-2 lg:mt-0" />
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
            className="sm:h-full h-60 object-cover rounded-md mt-2 lg:mt-0"
          />
          <div className="absolute top-0 left-0 w-full h-full backdrop-brightness-50 text-white  text-xl opacity-0 hover:opacity-100 rounded-md transition-opacity delay-100 ease-in ">
            <div className="w-full h-full flex flex-col items-center justify-center  translate-y-4 transition-transform delay-100 ease-in hover:translate-y-0 text-center">
              <h1 className="text-xl font-bold">Kandy Perahera</h1>

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
            className="sm:h-full h-60 object-cover rounded-md mt-2 lg:mt-0"
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
      </div>
    </div>
  );
};

export default Blogs;
