import React from "react";
import Report from "./dashboardComponents/Report";
import { Link } from "react-router";
import ProjectsTable from "./dashboardComponents/ProjectsTable";

function AdminDashboard() {
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
            <Link className=" text-[#0A84FF] font-medium font-satoshi text-sm md:text-base  p-1 ">
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
