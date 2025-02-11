import React from "react";
import image1 from "../images/New folder/lep.png";
import image3 from "../images/New folder/lepperd.jpg";
import image4 from "../images/New folder/yala-2.jpeg";

//activity
import activity_1 from "../images/New folder/activity_1.jpg";
import activity_2 from "../images/New folder/Activity_2.jpg";
import activity_3 from "../images/New folder/Activity_3.jpg";
import activity_4 from "../images/New folder/activity_4.jpg";

//cuisines
import cuisines_1 from "../images/Cuisines/food.png";
import cuisines_2 from "../images/Cuisines/fresh-fruits.png";
import cuisines_3 from "../images/Cuisines/image.jpg";
import cuisines_4 from "../images/Cuisines/seafood.png";
// import cuisines_5 from "../images/Cuisines/tea.jpg";

import Lottie from "lottie-react";
import animationData from "../images/svg/Animation - 1698640438657.json";
import animationData2 from "../images/svg/Animation - 1698641345767.json";

function ReadMore() {
  return (
    <div className="text-justify">
      <div className="relative">
        {/* Hero Image */}
        <img
          src={image1}
          alt="Sri Lanka"
          className="w-full m-auto h-[50vh] object-cover "
        />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center font-Montserrat justify-center">
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold  px-6 py-3 ">
            More About Sri Lanka
          </h1>
        </div>
      </div>

      <div className=" font-Montserrat   m-auto sm:w-3/5 w-11/12 pt-28">
        <h3 className="text-[36px]  text-center  font-Montserrat font-semibold">
          Welcome to Sri Lanka
        </h3>
        <h1 className="sm:text-[36px] text-[28px] text-center  font-semibold font-Montserrat  my-2">
          History of Sri Lanka
        </h1>
        <p className=" text-sm leading-6  mt-4">
          Sri Lanka was ruled by Kings from ancient times as far back as the 3rd
          century B.C spanning over 2.500 years as recorded history depicts.
          Recent excavations show that even during the Neolithic Age, there were
          food gatherers and rice cultivators in Sri Lanka.
        </p>
        <p className="text-sm leading-6 mt-2">
          The Mahavansa relates that the island was conquered in 504 BC by
          Vijaya, a hindu prince from Northeast India. After subjugating the
          aboriginal inhabitants, a people now know as Veddas, vijaya married a
          native princess, encouraged emigration from the main and made himself
          ruler of the entire island. however, the realm (called Sinhala after
          Vijaya's patrimonial name) that was inherited by his successor
          consisted of the arid region lying to the north of the south-central
          mountain system. Member of the dynasty founded by Vijaya reigned over
          Sinhala for several centuries. During this period, and particularly
          after the adoption in the 3rd century BC of Buddhism as the national
          religion, the Sinhalese created a highly developecivilisation. Extant
          evil once of their engineering skill and architectural achievement
          includes remnants of vast irrigation projects, many ruined cities,
          notably the ancient capital Anuradhapura and numerous ruined shrines
          called Dagabos. Ruins of ancient cities recall the one once
          flourishing civilisation of Sri Lanka. Two centres of early sinhalease
          civilisation were Anuradhapura in Northeast plain and polonnaruwa near
          the Mahaweli River to the southeast. both in succession became
          capitals of the Sinhalese kingdom.
        </p>
      </div>

      <div className="xl:w-3/5 w-11/12 m-auto  font-Montserrat">
        {/* Title & Description */}
        <div className="pt-20 ">
          <h1 className="sm:text-[36px]  text-[28px] text-center font-semibold font-Merriweather my-2">
            Wildlife
          </h1>
        </div>

        {/* Main Image Left - Text Right */}
        <div className="lg:flex items-center">
          {/* Left Large Image */}
          <div className="lg:w-1/2">
            <img
              src={image1}
              alt="Wildlife"
              className="h-96 w-full  object-cover"
            />
          </div>

          {/* Right Text Content */}
          <div className="lg:w-1/2  lg:pl-8">
            <p className="text-sm leading-6 mt-2">
              Sri Lanka is the Best for Big Game Safaris outside Africa. Its Big
              Five are the Elephant, Leopard, Sloth Bear, Blue and Sperm Whale.
              Few countries can rival its combination of Big Game safari
              animals, species densities, and tourism infrastructure.
            </p>
            <ul className="list-disc leading-6 marker:text-gray-400 text-sm marker:text-sm mt-6 ml-5">
              <li>Udawalawa National Park</li>
              <li>Yala National Park</li>
              <li>Wilpattu National Park</li>
              <li>Minneriya National Park</li>
            </ul>
          </div>
        </div>

        {/* Bottom Two Images */}
        <div className="lg:flex font-Montserrat text-sm justify-between mt-12 gap-6">
          <div className="">
            <img
              src={image3}
              alt="Safari"
              className="h-full w-[556px] rounded-md object-cover"
            />
            <p className="text-center mt-4 font-medium">Safari Adventure</p>
          </div>
          <div className=" mt-6 lg:mt-0">
            <img
              src={image4}
              alt="Nature"
              className="h-full w-[556px] rounded-md object-cover"
            />
            <p className="text-center mt-4 font-medium">Scenic Landscapes</p>
          </div>
        </div>
      </div>

      <div className="lg:mt-10  m-auto w-11/12 lg:w-3/5 pt-20  font-Montserrat">
        <div className=" font-Raleway py-2">
          <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Merriweather my-2">
            Adventure
          </h1>
        </div>
        <p className="text-sm mt-2">
          There's good swimming at any number of beaches along the south western
          coast with excellent scuba diving, snorkelling and surfing found at
          Hikkaduwa, Unawatuna and Weligama along with sailing, windsurfing and
          water skiing in Bentota River. Get on board at Mini Adam's Peak,
          Flying Ravana Zip Line and fly over iconic tea estates and lush
          greenery overlooking the famous Ella Gap. The hike to Ella Rock is
          more strenuous than the hike to Little Adam's Peak. Besides being a
          holy tourist destination, Adam's Peak is extremely popular with
          tourists for its alluring beauty and unmatched trekking. The peak, the
          seventh tallest peak in Sri Lanka, is also known as Sri Pada (sacred
          footstep) and Samanala Kanda (butterfly mountain). Climbing Sigiriya
          or Sinhagiri is an ancient rock fortress located in the northern
          Matale District near the town of Dambulla in the Central Province, Sri
          Lanka.
        </p>
        <div className="flex justify-center text-justify">
          <ul className="list-disc marker:text-gray-400 text-sm marker:text-2xl lg:grid grid-cols-2  lg:w-4/5 xl:w-1/2 list-outside my-10 mx-5 lg:mx-0 ">
            <li>Water rafting- kithulgala </li>
            <li>Ella rock climbing </li>
            <li>Flying ravana</li>
            <li>Sigiri rock climbing </li>
            <li>Water sports Bentota</li>
          </ul>
        </div>
      </div>
      <div className="lg:grid w-4/5 lg:w-3/5 m-auto lg:grid-cols-2 mt-4 lg:gap-4">
        <img
          src={activity_4}
          alt=""
          className="col-span-2 rounded-md object-cover h-44 sm:h-full"
        />
        <img src={activity_2} alt="" className="rounded-md object-cover mt-2" />
        <img
          src={activity_3}
          alt=""
          className="row-span-2 rounded-md object-cover mt-2"
        />
        <img src={activity_1} alt="" className="rounded-md object-cover mt-2" />
      </div>
      <div className="lg:mt-10 lg:w-3/5 w-11/12 m-auto sm:text-justify font-Montserrat pt-20 text-center leading-5 md:leading-6">
        <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Merriweather py-2">
          Economy
        </h1>
        <p className="text-sm mt-2 text-justify">
          The currency in use is the Sri Lankan rupee. Sri Lanka, being a
          developing country, has initiated many development projects. The road
          network is constantly being improved with the opening of many road
          highways, such as the Southern exprese way which connects the airport
          to the southern provinces Sri Jayawardanapura is the capital, while
          Colombo, the former capital, is the commercial capital of Sri Lanka.
          Train and bus services carry passengers to all parts of Sri Lanka. Sri
          Lanka has many banks, both local and international, that serve its
          customers with many banking cards and foreign currency.
        </p>
        <p className="text-sm mt-2">
          Sri Lanka has one of the highest literacy rates in the world. The
          health care system is also on par with the developed world. Sri Lanka
          provides free education and health care to all its citizens. However,
          there are many fee-levying schools and hospitals on the island. Pure
          drinking water is supplied via a network of water pipes to many areas
          of the country. In areas where this facility is not available, people
          use water from filtered wells for their own consumption.
        </p>
      </div>
      <div className="lg:mt-10 lg:w-3/5 w-11/12 m-auto sm:text-justify font-Montserrat pt-20 text-center leading-5 md:leading-6">
        <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Merriweather py-2">
          Sri Lankan Cuisines
        </h1>
        <p className="text-sm mt-2 text-justify">
          Due to its tropical location and varied landscapes, Sri Lanka has a
          healthy supply of fresh vegetables and luscious fruits throughout the
          year; they are also organically grown in the rural regions of the
          country. Spicy, sour, sweet. Although people assume that Sri Lankan
          food is spicy, it's made up of many other spices and herbs besides
          chili. Coriander seeds, black pepper, mustard seeds, nutmeg, cinnamon,
          cardamom, curry leaves, pandan leaves and lemongrass are all used to
          flavor and scent dishes. The central feature of Sri Lankan cuisine is
          rice and curry. Boiled or steamed rice, served with a curry of fish or
          meat, along with other curries made with vegetables, lentils, or
          fruits. Dishes are accompanied by pickled fruits or vegetables,
          chutneys, and sambols.
        </p>
      </div>
      <div className="lg:grid lg:w-3/5 w-11/12 m-auto lg:grid-cols-2 mt-4 lg:gap-4">
        <img
          src={cuisines_1}
          alt=""
          className="rounded-md object-cover h-44 sm:h-full"
        />
        <img src={cuisines_2} alt="" className="rounded-md object-cover" />
        <img
          src={cuisines_3}
          alt=""
          className="rounded-md object-cover h-full"
        />
        <img
          src={cuisines_4}
          alt=""
          className="rounded-md h-full object-cover"
        />
      </div>
      <div className="lg:w-3/5 w-11/12  m-auto text-sm font-Montserrat">
        <p className=" mt-5 text-justify leading-5 md:leading-6">
          Boiled or steamed rice, served with a curry of fish or meat, along
          with other curries made with vegetables, lentils, or fruits. Dishes
          are accompanied by pickled fruits or vegetables, chutneys, and
          sambols.
        </p>
        <p className="mt-5 text-justify text-center leading-5 md:leading-6">
          A variety of cuisines are available, which include both eastern and
          western Chinese and local dishes.
        </p>
      </div>
      <div className="lg:flex lg:w-3/5 w-11/12 m-auto mt-10 text-sm font-Montserrat">
        <div className="lg:w-1/3 lg:block hidden lg:mt-10">
          <Lottie animationData={animationData2} />
        </div>
        <div className="lg:mt-10 sm:text-justify lg:w-2/3 w-11/12 lg:ml-10 leading-5 md:leading-6">
          <h1 className="text-[36px] font-semibold font-Montserrat lg:py-2">
            Travel Guides
          </h1>
          <p className="text-sm mt-2">
            Our Sri Lanka Travel Guides will tell you all you need to know about
            visiting the wonderful island of Sri Lanka. Tourist guides provides
            the visitor with in depth knowledge in their mother tongue, all
            language speaking
          </p>
        </div>
        <div className="lg:w-1/3 lg:hidden mt-10">
          <Lottie animationData={animationData2} />
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
