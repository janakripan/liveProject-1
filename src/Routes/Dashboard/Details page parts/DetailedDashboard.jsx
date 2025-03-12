import React, { useEffect, useState } from "react";
import DetailsSidebar from "./DetailsSidebar";
import { SlOptionsVertical } from "react-icons/sl";
import { detailNav } from "../../../constants/detailsconstant";
import Apitester from "./Apitester";
import { PiPlay } from "react-icons/pi";
import RequestPage from "./RequestPage";
import { BsCaretLeft } from "react-icons/bs";

function DetailedDashboard() {
  const [isOpen, setIsOpen] = useState(false); // mobile sidebar controller
  const [switched, setSwitched] = useState(false); //state to switch between design and request
  const [navChange, setNavChange] = useState("overview"); //state to controll main navigation



  const handleSwitch = (value) => {
    setSwitched(value);
  };
  const handleNavChange = (value) => {
    setNavChange(value);
    
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-[80vh] pb-10 flex flex-col  px-4 relative">
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
      <ul className="lg:w-6/12 h-fit flex flex-row justify-between w-full overflow-x-auto ">
        {detailNav.map((items, index) => (
          <button onClick={() => handleNavChange(items.path)} key={index}>
            <li
              className={`px-2 py-1 transition-all duration-200 whitespace-nowrap text-base font-medium font-poppins rounded-lg
                ${navChange === items.path ? "text-white bg-[#38BDF8]" : ""} `}
            >
              {items.title}
            </li>
          </button>
        ))}
      </ul>

      {/*sidebar with requests */}

      <div className="w-full h-full flex flex-row gap-x-2 pt-3  relative  ">
       
        <div className={`h-full  w-80  hidden md:block `}/>
        <div
          className={`h-full w-80 md:w-64 absolute top-0 -left-5 z-20 transition-all flex flex-row items-center duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:block `}
        >
          <div
            className={`h-full md:w-64 w-80 bg-white  transition-all duration-300  `}
          >
            <DetailsSidebar />
          </div>
          
        </div>
        {/*button for mobile sidebar  */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-fit h-10 fixed top-3/4 left-0 md:hidden z-[9999] -translate-y-3/4 sidebarbutton p-0 bg-slate-300 rounded-r-2xl transition-all duration-200
              ${
                isOpen
                ?"translate-x-80"
                :"translate-x-0"
              }`}
          >
            {isOpen?<BsCaretLeft/> :<PiPlay />}
          </button>
        <div className="w-full h-full mt-2 md:pl-5 lg:pl-0 ">
          <h2 className="font-medium font-poppins text-[26px] ">
            Update an existing pet
          </h2>

          {/*buttons to swich b/w design and request */}

          <div className="w-full h-11 border-b-[1px] border-[#DDDDDD]  flex flex-row items-center justify-start mt-4 mb-6 ">
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
          {/*body of request and design page */}
          {switched ? (
            <div className=" w-full h-fit flex flex-col  ">
              <RequestPage />
            </div>
          ) : (
            <div className="  w-full h-fit flex flex-col  gap-y-4 ">
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
