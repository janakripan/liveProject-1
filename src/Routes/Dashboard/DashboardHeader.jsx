import React from "react";
import { IoMdPerson } from "react-icons/io";
import loginIcon from '../../assets/personIcon.png'
import { useLocation } from "react-router";
import logo from '../../assets/logo.png'
import SearchBar from "../../components/Shared/SearchBar";

function DashboardHeader() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={`w-full h-fit  px-4 ${location.pathname === "/dashboard" ? "bg-[#FAFAFA]" : ""}`}>
      <div className={`w-full max-w-screen-xl h-fit min-h-12 mx-auto flex items-center justify-between  p-10 px-4`}>
        <div className="w-5/12">
          {location.pathname === "/dashboard" ? (
            <div>
              <h1 className="text-gray-900  font-semibold text-3xl font-sans text-left">
                Hello , Hisham
              </h1>
              <p className="font-sans font-normal text-sm text-gray-900 text-left">
                Here is your project details
              </p>
            </div>
          ) : (
            <div className="flex flex-row items-center w-full gap-x-14">
                <img src={logo} className="h-6" alt="logo" />
                <SearchBar/>

            </div>
          )}
        </div>
        <div>
          <button className="h-10 aspect-square text-lg bg-[#C7C7C7] rounded-md flex items-center justify-center text-[#1C274C] ">
            <img src={loginIcon} alt="Account icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
