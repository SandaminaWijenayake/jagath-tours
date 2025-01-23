import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SecondNavBar from "./SecondNavBar";

const Layout = () => {
  return (
    <>
      <SecondNavBar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
