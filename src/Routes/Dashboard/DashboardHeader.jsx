import React from "react";
import { IoMdPerson } from "react-icons/io";
import { useLocation } from "react-router";
import logo from '../../assets/logo.png'
import SearchBar from "../../components/Shared/SearchBar";

function DashboardHeader() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="w-full h-fit bg-[#FAFAFA]">
      <div className="w-full max-w-screen-xl h-fit min-h-12 mx-auto flex items-center justify-between bg-[#FAFAFA] p-10 px-0 ">
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
            <div className="flex flex-row items-center w-full gap-x-6">
                <img src={logo} className="h-6" alt="logo" />
                <SearchBar/>

            </div>
          )}
        </div>
        <div>
          <button className="p-1 text-lg bg-slate-300 rounded-sm">
            <IoMdPerson />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
