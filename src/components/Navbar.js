import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { List } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import logoBlack from "../images/logoblack.png";
import logoblue from "../images/logoblue.png";
const onHover = {
  ":hover": { color: "white" },
  marginLeft: "20px",
  // cursor: "pointer",
};

const Navbar = () => {
  const [over, setOver] = useState(false);
  const [active, setActive] = useState("Home");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const packagesHandler = () => {
    navigate("/packages");
    setAnchorEl(null);
  };

  const contactUsHandler = () => {
    navigate("/contact_us");
    setAnchorEl(null);
  };

  const aboutUsHandler = () => {
    navigate("/about_us");
    setAnchorEl(null);
  };

  const planningToolHandler = () => {
    navigate("/planningTool");
    setAnchorEl(null);
  };

  const NavItems = [
    { path: "/", label: "Home" },
    { path: "/Packages", label: "Packages" },
    { path: "/PlanningTool", label: "Plan Your Trip" },
    { path: "/Contact_us", label: "Contact Us" },
    { path: "/About_us", label: "About Us" },
  ];

  const navigate = useNavigate();

  return (
    <div className="font-Montserrat top-0 z-50 lg:sticky bg-navBarColor">
      <div className="flex justify-between px-2 sm:w-8/12 lg:w-10/12 xl:w-8/12 m-auto  left-0  font-bold  text-white shadow-sm sm:p-4 lg:p-0 text-sm">
        <div className="hidden lg:inline-block">
          <ul className="flex justify-between text-lg  font-medium sm:w-96 lg:w-full">
            {NavItems.map((items) => (
              <Link
                key={items.path}
                to={items.path}
                onClick={() => setActive(items.label)}
                className={` p-4 ${
                  active === items.label
                    ? "bg-slate-600 text-blue-50"
                    : "hover:text-sky-100  hover:bg-bgColorOfNavbar"
                }`}
              >
                {items.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="hidden  lg:flex justify-evenly items-center">
          <Link>
            <FacebookOutlinedIcon
              fontSize="medium"
              color="primary"
              sx={onHover}
            />
          </Link>
          <Link to="https://x.com/jagath_tou38334 ">
            <TwitterIcon fontSize="medium" color="primary" sx={onHover} />
          </Link>
          <Link to="https://www.instagram.com/geniuslankatours/">
            <InstagramIcon fontSize="medium" color="error" sx={onHover} />
          </Link>
          {/* <WhatsAppIcon fontSize="small" color="success" sx={onHover} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
