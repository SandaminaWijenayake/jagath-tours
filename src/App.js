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

const App = () => {
  return (
    <>
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
        </Route>
      </Routes>
    </>
  );
};

export default App;
