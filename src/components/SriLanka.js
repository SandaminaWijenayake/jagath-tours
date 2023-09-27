import React from "react";
import image from "../images/sri-lanka-tourist-map.jpg";
import image1 from "../images/New folder/lep.webp";
import image2 from "../images/water-rifting.jpg";

const SriLanka = () => {
  return (
    <div className="w-4/5 m-auto mt-20">
      <div className="flex gap-10">
        <div className="w-6/12">
          <h1 className="text-4xl  my-5">What is Sri Lanka?</h1>
          <p className="text-xl mt-10 text-justify">
            Sri lanka Officially, the democratic socialist republic of Sri Lanka
            is an island country located to the southeast of India. Being a
            democracy Free elections are held every five years to choose a
            president and its government. In ancient times, it was known by
            different names. The Greek travellers called it Taprobana, and the
            Arabs called it Serendib. Before independence in 1948, it was called
            Ceylon.
          </p>
          <p className="text-xl mt-10 text-justify">
            <h1 className="text-4xl  my-5">Demograpy</h1>
            Sri Lanka is home to a rich mixture of people. They are the
            Sinhalese, comprising 75% of the population of Tamils and Muslims.
            They practice a variety of religions, namely Buddhism, Hinduism and
            Christianity. The people also speak a variety of languages, mainly
            Sinhala, Tamil and English. All groups now exist peacefully, making
            Sri Lanka a truly multi-religious, multilingual, and multi-ethnic
            country with a population of more than 20 million.
          </p>
          <p className="text-xl mt-10 text-justify">
            <h1 className="text-4xl  my-5">Geography</h1>
            Geographically, it is approximately 433km long, 244km wide, and 66
            000 square kilometres in extent. The coastal parts of Sri Lanka are
            the chief crops grown in these parts. The central parts are hilly.
            It is cool in the hill country. Tea and vegetables are grown in this
            region. The main export crops are tea, rubber and coconut. Being
            close to the equator, it has a hot, wet climate.
          </p>
        </div>
        <img src={image} alt="" className="w-6/12 rounded-md" />
      </div>

      {/* <p className="text-xl mt-10">
        Geographically, it is approximately 433km long, 244km wide, and 66 000
        square kilometres in extent. The coastal parts of Sri Lanka are the
        chief crops grown in these parts. The central parts are hilly. It is
        cool in the hill country. Tea and vegetables are grown in this region.
        The main export crops are tea, rubber and coconut. Being close to the
        equator, it has a hot, wet climate.
      </p> */}
      <p className="text-xl mt-10 text-justify">
        <h1 className="text-4xl  my-5">History</h1>
        The country has a history dating back 3000 years. Kings ruled this
        country for 2358 years. The monarchy ended on March 2, 1815 due to a
        revolt by the chieftains.
      </p>
      <p className="text-xl mt-10 text-justify">
        <h1 className="text-4xl  my-5">Wildlife and Activities</h1>
        Despite its compact size, Sri Lanka boasts one of the highest rates of
        biological endemism in the world, whether in plants or animals, and is
        included among the five biodiversity hotspots in the world. Whether you
        are a beach bum, wildlife enthusiast, adventurer, or cultural tourist,
        Sri Lanka offers something to the discerning traveller seeking seclusion
        and tranquilly amid unsurprised natural beauty.
      </p>
      <div className="flex  justify-between mt-12">
        <div className="w-1/3">
          <img src={image1} alt="" className="h-64 w-11/12 m-auto rounded-xl" />
          <p className="text-center mt-4 font-medium">
            Wildlife in Yala National Park
          </p>
        </div>
        <div className="w-2/3">
          <img src={image2} alt="" className="h-64 w-11/12 m-auto rounded-xl" />
          <p className="text-center  mt-4 font-medium">
            Water Rafting and Adventure Activities
          </p>
        </div>
      </div>
      <p className="text-xl mt-10 text-justify">
        <h1 className="text-4xl  my-5">Economy</h1>
        The currency in use is the Sri Lankan rupee. Sri Lanka, being a
        developing country, has initiated many development projects. The road
        network is constantly being improved with the opening of many road
        highways, such as the Southern exprese way which connects the airport to
        the southern provinces Sri Jayawardanapura is the capital, while
        Colombo, the former capital, is the commercial capital of Sri Lanka.
        Train and bus services carry passengers to all parts of Sri Lanka. Sri
        Lanka has many banks, both local and international, that serve its
        customers with many banking cards and foreign currency.
      </p>
      <p className="text-xl mt-10 text-justify">
        Sri Lanka has one of the highest literacy rates in the world. The health
        care system is also on par with the developed world. Sri Lanka provides
        free education and health care to all its citizens. However, there are
        many fee-levying schools and hospitals on the island. Pure drinking
        water is supplied via a network of water pipes to many areas of the
        country. In areas where this facility is not available, people use water
        from filtered wells for their own consumption.
      </p>
      <p className="text-xl mt-10 text-justify">
        A variety of cuisines are available, which include both eastern and
        western Chinese and local dishes.
      </p>
    </div>
  );
};

export default SriLanka;
