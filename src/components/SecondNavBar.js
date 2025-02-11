import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { List } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

import logoBlack from "../images/logoblack.png";
import logoblue from "../images/logoblue.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import HomeIcon from "@mui/icons-material/Home";

const SecondNavBar = () => {
  const [over, setOver] = useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const navigate = useNavigate();

  const startPlaningButtonHandler = () => {
    navigate("/PlanningTool");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    console.log("hello");
  };

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  const menuItems = [
    { text: "Home", url: "/" },
    { text: "Packages", url: "/packages" },
    { text: "Plan your trip", url: "/PlanningTool" },
    { text: "Contact us", url: "/Contact_us" },
    { text: "About us", url: "/About_us" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item.url)}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Facebook", "Twitter", "instagram"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === "Facebook" ? (
                  <FacebookOutlinedIcon />
                ) : text === "Twitter" ? (
                  <TwitterIcon />
                ) : text === "instagram" ? (
                  <InstagramIcon />
                ) : (
                  "default"
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="">
      <div className=" flex justify-around fixed lg:relative z-20  lg:justify-between lg:px-2 top-0 left-0 lg:w-8/12 w-full m-auto font-bold  bg-white text-white shadow-sm py-2 lg:p-[28px] text-sm">
        <div className="lg:hidden block">
          <List sx={{ marginLeft: "auto", padding: "0px" }}>
            <span>
              <MenuIcon
                fontSize="large"
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={toggleDrawer(true)}
                sx={{ color: "black" }}
              >
                {" "}
              </MenuIcon>
              <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </span>
          </List>
        </div>
        <Link to="/" className="">
          <div
            className="  md:w-72 p-3 w-48 md:pl-4 "
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          >
            <img src={over ? logoBlack : logoblue} alt="" className="" />
          </div>
        </Link>

        <div className="hidden text-black  xl:flex justify-between  items-center ">
          <div className="">
            <h1 className="font-Montserrat font-medium text-sm ">
              <PhoneIcon fontSize="medium" sx={{ marginRight: "20px" }} />
              +94 77-902-7052
            </h1>
          </div>
          <div class="w-px bg-gray-300 h-1/3 mx-4"></div>

          <div className="">
            <Button
              onClick={startPlaningButtonHandler}
              variant="outlined"
              sx={{ padding: "10px", paddingX: "20px" }}
            >
              Start planning
            </Button>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <MoreVertIcon sx={{ color: "black" }} fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default SecondNavBar;
