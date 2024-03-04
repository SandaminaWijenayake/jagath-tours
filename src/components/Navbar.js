import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { List } from "@mui/material";

import logoBlack from "../images/logoblack.png";
import logoblue from "../images/logoblue.png";

const Navbar = () => {
  const [over, setOver] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const packagesHandler = () => {
    navigate("/Packages");
    setAnchorEl(null);
  };

  const contactUsHandler = () => {
    navigate("/Contact_us");
    setAnchorEl(null);
  };

  const aboutUsHandler = () => {
    navigate("/About_us");
    setAnchorEl(null);
  };

  const planningToolHandler = () => {
    navigate("/PlanningTool");
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <div className="font-Merriweather">
      <div className="flex justify-between px-2 top-0 left-0 w-full z-10 font-bold fixed bg-white text-white shadow-sm p-4 lg:p-2 text-sm  backdrop-blur-sm">
        <Link to="/" className="">
          <div
            className="-translate-y-0 md:w-64 p-3 w-48 md:pl-4 "
            // style={{
            //   backgroundSize: "cover",
            //   backgroundImage: `url(${logoBlack})`,
            //   "&:hover": { background: "white", transform: "scale(1.5)" },
            // }}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          >
            <img src={over ? logoBlack : logoblue} alt="" className="" />
          </div>
        </Link>
        <div className="hidden lg:inline-block">
          <ul className="flex justify-around text-xs translate-y-4 sm:w-96 text-black">
            <Link to="/Packages" className="hover:text-sky-700">
              Packages
            </Link>
            {/* <Link to="/Blogs" className="hover:text-sky-500">
              BLOGS
            </Link> */}
            <Link to="/PlanningTool" className="hover:text-sky-700">
              Plan Your Trip
            </Link>
            <Link to="/Contact_us" className="hover:text-sky-700">
              Contact Us
            </Link>
            <Link to="/About_us" className="hover:text-sky-700">
              About Us
            </Link>
          </ul>
        </div>

        <div className="lg:hidden block">
          <List sx={{ marginLeft: "auto", padding: "0px" }}>
            <span>
              <MenuIcon
                fontSize="large"
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ color: "black" }}
              />

              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                  }}
                  onClick={packagesHandler}
                >
                  PACKAGES
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                  }}
                  onClick={planningToolHandler}
                >
                  PLANNIG TOOL
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                  }}
                  onClick={contactUsHandler}
                >
                  CONTACT US
                </MenuItem>
                <MenuItem
                  sx={{
                    fontSize: "12px",
                    fontFamily: "inherit",
                    fontWeight: "bold",
                  }}
                  onClick={aboutUsHandler}
                >
                  ABOUT US
                </MenuItem>
              </Menu>
            </span>
          </List>

          {/* <Stack direction="row" spacing={2}>
            <Button variant="outlined" sx={{ color: "#4caef5" }}>
              Register now
            </Button>
          </Stack> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
