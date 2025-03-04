import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import SevenDaysPackage from "./components/SevenDaysPackage";
import Packages from "./components/Packages";
// import BlogContent from "./components/Packages";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import Create from "./components/Create";
import FourDaysPackage from "./components/FourDaysPackage";
import Planning from "./components/Planning";
import PlanningTool from "./components/PlanningTool";
import BeachStaying from "./components/BeachStaying";
import { GlobleContext } from "./globleState/GlobleState";
import { useState, useRef } from "react";
import Result from "./components/Result";
import ReadMore from "./components/ReadMore";

const App = () => {
  const [select, setSelect] = useState([]);
  const chosenPlaces = useRef([]);
  // const [chosenPlaces, setChosenPlaces] = useState([]);
  return (
    <GlobleContext.Provider value={{ select, setSelect, chosenPlaces }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          {/* <Route path="/Blogs" element={<BlogContent />} /> */}
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/sevenDaysPackage" element={<SevenDaysPackage />} />
          <Route path="/fourDaysPackage" element={<FourDaysPackage />} />
          <Route path="/beachStaying" element={<BeachStaying />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/planningTool" element={<PlanningTool />} />
          <Route path="/result" element={<Result />} />
          <Route path="/AboutSriLanka" element={<ReadMore />} />
        </Route>
      </Routes>
    </GlobleContext.Provider>
  );
};

export default App;
