import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-8 top-0 left-0 w-full z-10 font-semibold fixed bg-white p-4 text-lg">
        <div className="translate-y-1">
          <Link to="/" className="hover:text-sky-500">
            Genius Lanka Tours
          </Link>
        </div>
        <div className="w-1/3">
          <ul className="flex justify-around text-sm translate-y-2">
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

        <div>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" sx={{ color: "#4caef5" }}>
              Register now
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
