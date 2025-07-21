import { useEffect } from "react";
import sevenDaysTourPackage from "../images/packages/SigriyaTumbnail.webp";
import fourDaysTourPackage from "../images/packages/beach-4.webp";
import BeachStayingPackage from "../images/packages/beach-5.webp";
import { useNavigate } from "react-router-dom";

const BlogContent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pt-16 pb-8 md:py-8">
        <h1 className="sm:text-[36px] text-[28px] text-center font-semibold font-Roboto py-2">
          Tour Packages
        </h1>
      </div>
      <div className="xl:w-[1200px] xl:h-[420px]  lg:w-[960px] lg:h-[330px]  md:h-[240px] md:w-11/12  w-full  m-auto  gap-7 flex-col flex md:flex-row mb-20 font-Montserrat text-xl xl:text-2xl z-30  sm:font-bold">
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/sevenDaysPackage")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={sevenDaysTourPackage}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 text-center rounded-md shadow-md w-full font-Roboto font-normal">
            Fourteen Days
          </p>
        </div>
        <div
          className="md:w-[368px] relative overflow-hidden cursor-pointer"
          onClick={() => navigate("/fourDaysPackage")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={fourDaysTourPackage}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 text-center rounded-md shadow-md w-full font-Roboto font-normal">
            Four Days
          </p>
        </div>
        <div
          className="md:w-[368px] relative overflow-hidden"
          onClick={() => navigate("/beachStaying")}
        >
          <img
            className="h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
            src={BeachStayingPackage}
            alt=""
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm text-white px-4 py-2 text-center rounded-md shadow-md w-full font-Roboto font-normal">
            Beach Holidays
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
