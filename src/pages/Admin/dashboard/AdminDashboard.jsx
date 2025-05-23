import React from "react";
import Report from "./components/Report";
import { Link } from "react-router";
import ProjectsTable from "./components/ProjectsTable";
import { useProjects } from "../../../contexts/admin/ProjectApiContext";
import loader from '../../../assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg'

function AdminDashboard() {
  const { isLoading, error} = useProjects()

   if (isLoading)
      return (
        <div className="w-full h-screen bg-Bgprimary flex flex-row items-center justify-center">
          {" "}
          <img src={loader} alt="loading animation" className="w-20 h-20" />{" "}
        </div>
      );
    if (error)
      return (
        <div className="w-full h-screen flex flex-row bg-Bgprimary items-center justify-center">
          {" "}
          <p className="font-bold text-xl font-satoshi text-white">
            Error fetching developers
          </p>
        </div>
      );
  return (
    <div
      className={`h-full p-5 relative  transition-all duration-300 flex flex-col w-full max-w-screen-xl  mx-auto`}
    >
      <section>
        {/* dashboard overview */}
        <div className="w-full h-fit">
          <h3 className="md:text-xl text-lg lg:text-2xl font-bold capitalize font-satoshi text-heading ">
            Dashboard
          </h3>
          <p className="font-satoshi font-medium text-sm md:text-base text-heading mt-2">
            Overview of your API projects and activity
          </p>
        </div>
        <div className="w-full h-fit mt-5  no-scrollbar ">
          <Report />
        </div>
      </section>

      <section>
        {/* projects table section */}
        <div className="w-full h-fit mt-7 flex flex-col  ">
          <div className="w-full h-fit flex flex-row items-start justify-between  ">
            <h3 className="font-bold font-satoshi md:text-xl text-lg lg:text-2xl text-heading ">
              API Projects
            </h3>
            <Link
            to={"project"}
             className=" text-[#0A84FF] font-medium font-satoshi text-sm md:text-base  p-1 ">
              See all
            </Link>
          </div>
          <div className="w-full h-[286px] overflow-y-hidden overflow-x-scroll  no-scrollbar  mt-4 drop-shadow-sm rounded-lg border-b border-[#E6E1E2]">
            <ProjectsTable />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
