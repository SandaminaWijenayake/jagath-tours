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
        Sri Lanka was ruled by Kings from ancient times as far back as the 3rd
        century B.C spanning over 2.500 years as recorded history depicts.
        Recent excavations show that even during the Neolithic Age, there were
        food gatherers and rice cultivators in Sri Lanka.
      </p>
      <p className="text-xl mt-10 text-justify mt-5">
        The Mahavansa relates that the island was conquered in 504 BC by Vijaya,
        a hindu prince from Northeast India. After subjugating the aboriginal
        inhabitants, a people now know as Veddas, vijaya married a native
        princess, encouraged emigration from the main and made himself ruler of
        the entire island. however, the realm (called Sinhala after Vijaya's
        patrimonial name) that was inherited by his successor consisted of the
        arid region lying to the north of the south-central mountain system.
        Member of the dynasty founded by Vijaya reigned over Sinhala for several
        centuries. During this period, and particularly after the adoption in
        the 3rd century BC of Buddhism as the national religion, the Sinhalese
        created a highly developecivilisation. Extant evil once of their
        engineering skill and architectural achievement includes remnants of
        vast irrigation projects, many ruined cities, notably the ancient
        capital Anuradhapura and numerous ruined shrines called Dagabos. Ruins
        of ancient cities recall the one once flourishing civilisation of Sri
        Lanka. Two centres of early sinhalease civilisation were Anuradhapura in
        Northeast plain and polonnaruwa near the Mahaweli River to the
        southeast. both in succession became capitals of the Sinhalese kingdom.
      </p>
      <p className="text-xl mt-10 text-justify">
        <h1 className="text-4xl  my-5">Wildlife</h1>
        Sri Lanka is the Best for Big Game Safaris outside Africa. Its Big Five
        are the Elephant, Leopard, Sloth Bear, Blue and Sperm Whale. Few
        countries can rival its combination of Big Game safari animals, species
        densities and tourism infrastructure. It is undoubtedly the Ultimate
        Island Safari. Sri Lanka offers with six most recommended wildlife
        safari Udawalwawe, Yala, Wilpattu, Minneriya national parks, Kaudulla
        and Eco park.
      </p>
      <p className="text-xl mt-10 text-justify">
        <h1 className="text-4xl  my-5">Activities</h1>
        There's good swimming at any number of beaches along the south western
        coast with excellent scuba diving, snorkelling and surfing found at
        Hikkaduwa, Unawatuna and Weligama along with sailing, windsurfing and
        water skiing in Bentota River. Get on board at Mini Adam's Peak, Flying
        Ravana Zip Line and fly over iconic tea estates and lush greenery
        overlooking the famous Ella Gap. The hike to Ella Rock is more strenuous
        than the hike to Little Adam's Peak. Besides being a holy tourist
        destination, Adam's Peak is extremely popular with tourists for its
        alluring beauty and unmatched trekking. The peak, the seventh tallest
        peak in Sri Lanka, is also known as Sri Pada (sacred footstep) and
        Samanala Kanda (butterfly mountain). Climbing Sigiriya or Sinhagiri is
        an ancient rock fortress located in the northern Matale District near
        the town of Dambulla in the Central Province, Sri Lanka.
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
        <h1 className="text-4xl  my-5">Sri Lankan Cuisines</h1>
        Due to its tropical location and varied landscapes, Sri Lanka has a
        healthy supply of fresh vegetables and luscious fruits throughout the
        year; they are also organically grown in the rural regions of the
        country. Spicy, sour, sweet. Although people assume that Sri Lankan food
        is spicy, it's made up of many other spices and herbs besides chili.
        Coriander seeds, black pepper, mustard seeds, nutmeg, cinnamon,
        cardamom, curry leaves, pandan leaves and lemongrass are all used to
        flavor and scent dishes. The central feature of Sri Lankan cuisine is
        rice and curry. Boiled or steamed rice, served with a curry of fish or
        meat, along with other curries made with vegetables, lentils, or fruits.
        Dishes are accompanied by pickled fruits or vegetables, chutneys, and
        sambols.
      </p>
      <p className="text-xl mt-5 text-justify">
        Boiled or steamed rice, served with a curry of fish or meat, along with
        other curries made with vegetables, lentils, or fruits. Dishes are
        accompanied by pickled fruits or vegetables, chutneys, and sambols.
      </p>
      <p className="text-xl mt-5 text-justify">
        A variety of cuisines are available, which include both eastern and
        western Chinese and local dishes.
      </p>
    </div>
  );
};

export default SriLanka;
