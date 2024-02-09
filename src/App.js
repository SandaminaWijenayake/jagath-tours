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

const App = () => {
  const [select, setSelect] = useState([]);
  const chosenPlaces = useRef([]);

  return (
    <GlobleContext.Provider value={{ select, setSelect, chosenPlaces }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Packages" element={<Packages />} />
          {/* <Route path="/Blogs" element={<BlogContent />} /> */}
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Contact_us" element={<ContactUs />} />
          <Route path="/About_us" element={<AboutUs />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/SevenDaysPackage" element={<SevenDaysPackage />} />
          <Route path="/FourDaysPackage" element={<FourDaysPackage />} />
          <Route path="/BeachStaying" element={<BeachStaying />} />
          <Route path="/Planning" element={<Planning />} />
          <Route path="/PlanningTool" element={<PlanningTool />} />
          <Route path="/Result" element={<Result />} />
        </Route>
      </Routes>
    </GlobleContext.Provider>
  );
};

export default App;
