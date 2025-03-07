import React, { useState } from "react";
import DetailsSidebar from "./DetailsSidebar";
import { SlOptionsVertical } from "react-icons/sl";
import { detailNav } from "../../../constants/detailsconstant";
import { Link, NavLink } from "react-router";
import Apitester from "./Apitester";
import { PiPlay } from "react-icons/pi";
import RequestPage from "./RequestPage";

function DetailedDashboard() {
  const [isOpen, setIsOpen] = useState(false);// mobile sidebar controller
  const [isNavOpen, setIsNavOpen] = useState(false);// mobile nav controller
  const [switched, setSwitched] = useState(false); //state to switch between design and request
  const [navChange , setNavChange] = useState("overview"); //state to controll main navigation

  const handleSwitch = (value) => {
    setSwitched(value);
  };
  const handleNavChange = (value) =>{
    setNavChange(value)
    
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-[80vh] pb-10 flex flex-col  px-4 ">
      <div className="w-full h-fit flex items-center justify-between mb-6">
        <h1 className="font-medium font-poppins lg:text-[40px] md:text-3xl text-2xl ">
          Swagger Pet Store
        </h1>
        <button className=" p-3">
          <SlOptionsVertical />
        </button>
      </div>
      <p className="font-poppins font-normal text-sm md:text-base  mb-6">
        This is a sample Pet Store Server based on the OpenAPI 3.0
        specification. You can find out more about Swagger at http://swagger.io.
        In the third iteration of the pet store, we've switched to the design
        first approach! You can now help us improve the API whether it's by
        making changes to the definition itself or to the code. That way, with
        time, we can improve the API in general, and expose some of the new
        features in OAS3.
      </p>
      <ul className="w-6/12 h-fit hidden lg:flex flex-row justify-between  ">
        {detailNav.map((items, index) => (
          <button 
          onClick={()=>handleNavChange(items.path)}
          key={index} >
            <li
              className={`px-2 py-1 transition-all duration-200 text-base font-medium font-poppins rounded-lg
                ${
                  navChange === items.path
                  ?"text-white bg-[#38BDF8]"
                  :""
                } `}
            >
              {items.title}
            </li>
          </button>
        ))}
      </ul>
      {/*navlink for mobile screen */}
      <div>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="flex flex-col justify-between lg:hidden gap-2 p-2 rounded-lg border border-gray-800 relative"
        >
          <div
            className={`w-6 h-[1px] bg-gray-800 transition-all duration-300 ${
              isNavOpen
                ? "translate-y-[9px] rotate-45"
                : "translate-y-0 rotate-0"
            }`}
          />
          <div
            className={`w-6 h-[1px] bg-gray-800 transition-all duration-300 ${
              isNavOpen ? "scale-0" : "scale-100"
            }`}
          />
          <div
            className={`w-6 h-[1px] bg-gray-800 ${
              isNavOpen
                ? "-translate-y-[9px] -rotate-45"
                : "translate-y-0 rotate-0"
            }`}
          />
        </button>
        <div
          className={`w-6/12 h-fit absolute lg:hidden left-0 border border-gray-800 bg-white transition-all duration-300 rounded-lg p-2 z-10 ${
            isNavOpen ? "translate-x-0 w-6/12" : "-translate-x-full w-0"
          }`}
        >
          <ul className="w-full h-fit flex flex-col gap-y-3 ">
            {detailNav.map((items, index) => (
              <NavLink key={index} to={items.path}>
                <li
                  className={`px-2 py-1 bg-gray-300 text-sm font-medium font-poppins rounded-lg`}
                >
                  {items.title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full h-full flex flex-row gap-x-2 pt-3  relative  ">
        {/* sidebar for normal screens  */}
        <div className={`h-full  w-80 relative hidden md:block `}>
          <DetailsSidebar />
        </div>
        {/* sidebar for mobile screen */}
        <div
          className={`h-full md:hidden  w-fit  absolute top-0 left-0 z-20 transition-all flex flex-row items-center duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <div
            className={`h-full  w-80 bg-white  transition-all duration-300 `}
          >
            <DetailsSidebar />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-fit h-full p-0 bg-slate-300"
          >
            <PiPlay />
          </button>
        </div>
        <div className="w-full h-full mt-2 ">
          <h2 className="font-medium font-poppins text-[26px] ">
            Update an existing pet
          </h2>

          {/*buttons to swich bw design and request */}

          <div className="w-full h-11 border-b-[1px] border-[#DDDDDD]  flex flex-row items-center justify-start ">
            <button
              onClick={() => handleSwitch(false)}
              className={`h-full w-fit flex flex-row items-center justify-center px-10 text-[#8C8C8C] 
              leading-loose tracking-tight text-base font-poppins transition-all duration-200 font-medium${
                switched
                  ? ""
                  : " text-[#FACC15] border-b-[2px] border-[#FACC15] "
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleSwitch(true)}
              className={`h-full w-fit  flex flex-row items-center justify-center px-7 text-[#8C8C8C] 
              leading-loose tracking-tight text-base font-poppins transition-all duration-200 font-medium${
                switched
                  ? " text-[#FACC15] border-b-[2px] border-[#FACC15] "
                  : ""
              }`}
            >
              Request
            </button>
          </div>

          {switched ? (
            <div className=" w-full h-fit flex flex-col mt-8 ">
              <RequestPage/>
            </div>
          ) : (
            <div className=" w-full h-fit flex flex-col  gap-y-4 ">
              <div className=" h-fit w-full">
                <Apitester />
              </div>
              <div className=" h-fit w-full">
                <Apitester />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailedDashboard;
