import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { List } from "@mui/material";

const Navbar = () => {
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

  const navigate = useNavigate();

  return (
    <div className="font-Roboto">
      <div className="flex justify-between px-8 top-0 left-0 w-full  z-10 font-semibold fixed bg-white p-4 text-lg">
        <div className="translate-y-0">
          <Link to="/" className="hover:text-sky-500">
            Genius Lanka Tours
          </Link>
        </div>
        <div className="hidden sm:inline-block">
          <ul className="flex justify-around text-sm translate-y-1 sm:w-96">
            <Link to="/Packages" className="hover:text-sky-500">
              PACKAGES
            </Link>
            {/* <Link to="/Blogs" className="hover:text-sky-500">
              BLOGS
            </Link> */}
            <Link to="/Reviews" className="hover:text-sky-500">
              REVIEWS
            </Link>
            <Link to="/Contact_us" className="hover:text-sky-500">
              CONTACT US
            </Link>
            <Link to="/About_us" className="hover:text-sky-500">
              ABOUT US
            </Link>
          </ul>
        </div>

        <div className="sm:hidden block">
          <List sx={{ marginLeft: "auto", padding: "0px" }}>
            <span>
              <MenuIcon
                fontSize="large"
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
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
