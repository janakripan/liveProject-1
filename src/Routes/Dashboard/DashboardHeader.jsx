import React from "react";
import { IoMdPerson } from "react-icons/io";
import { useLocation } from "react-router";
import logo from '../../assets/zudoku-logo-full-light 1.svg';
import SearchBar from "../../components/Shared/SearchBar";

function DashboardHeader() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={`w-full h-fit  px-4 ${location.pathname === "/dashboard" ? "bg-[#FAFAFA]" : ""}`}>
      <div className={`w-full max-w-screen-xl h-fit min-h-12 mx-auto flex items-start justify-between  py-10 `}>
        <div className=" w-8/12 md:w-5/12">
          {location.pathname === "/dashboard" ? (
            <div >
              <h1 className="text-gray-900 font-semibold md:text-2xl text-xl lg:text-3xl font-sans text-left">
                Hello , Hisham
              </h1>
              <p className="font-sans font-normal md:text-sm text-xs text-gray-900 text-left">
                Here is your project details
              </p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-3 lg:gap-x-14">
                <img src={logo} className="lg:h-6 md:h-5 h-5 " alt="logo" />
                <SearchBar/>

            </div>
          )}
        </div>
        <div>
          <button className="h-10 aspect-square text-lg bg-[#C7C7C7] rounded-md flex items-center justify-center text-[#1C274C] ">
            
            <IoMdPerson/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
