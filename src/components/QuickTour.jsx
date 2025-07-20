
import { motion } from "framer-motion";
import newimage1 from "../images/cta-1-368x420.jpg";
import newimage2 from "../images/cta-2-368x420.jpg";
import newimage3 from "../images/cta-3-368x420.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";


function QuickTour() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#F7F7F7] pt-20 lg:pt-0 pb-8">
      <motion.div 
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: -32, opacity: 1 }}
      // animate={{ y: -32, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="xl:w-[1200px] xl:h-[420px] lg:w-[960px] lg:h-[330px] md:w-[720px] md:h-[240px] w-[320px]  m-auto  gap-7 flex-col flex md:flex-row mb-20 font-Montserrat text-xl xl:text-2xl z-30 lg:-translate-y-8 sm:font-bold justify-center">
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/sevenDaysPackage")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={newimage1}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2  text-white px-4 py-2 text-center w-max">
            Fourteen Days
          </p>
        </div>
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/fourDaysPackage")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={newimage2}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2  text-white px-4 py-2 text-center w-max">
            Four Days
          </p>
        </div>
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/beachStaying")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={newimage3}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2  text-white px-4 py-2 text-center w-max">
            Beach Holidays
          </p>
        </div>
      </motion.div>
      <p
        onClick={() => navigate("/Packages")}
        className="text-center -translate-y-16 cursor-pointer font-Montserrat"
      >
        Other Tours
        <ArrowForwardIcon fontSize="small" />
      </p>
    </div>
  );
}

export default QuickTour;
