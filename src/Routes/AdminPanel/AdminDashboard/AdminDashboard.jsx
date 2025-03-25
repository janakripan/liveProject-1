import React from "react";
import { useSidebar } from "../../../contexts/admin/SidebarContext";
import Report from "./dashboardComponents/Report";
import { Link } from "react-router";
import ProjectsTable from "./dashboardComponents/ProjectsTable";
import { requests } from "../../../constants/Projects/requestsConstant";
import RequestCard from "./Shared/RequestCard";

function AdminDashboard() {
  const latestRequests = [...requests]
    .sort((a, b) => b.lastUpdated - a.lastUpdated)
    .slice(0, 3);
  const { isOpen } = useSidebar();
  return (
    <div
      className={` h-full  px-5 py-5  transition-all duration-300  ${
        isOpen ? "md:ml-[280px] " : "  ml-[80px] "
      }`}
    >
      <section>
        {/* dashboard overview */}
        <div className="w-full h-fit">
          <h3 className="md:text-xl text-lg lg:text-2xl font-bold capitalize font-satoshi text-[#1C1B1C] ">
            Dashboard
          </h3>
          <p className="font-satoshi font-medium text-sm md:text-base text-[#605E5F] mt-2">
            Overview of your API projects and activity
          </p>
        </div>
        <div className="w-full h-fit mt-5 ">
          <Report />
        </div>
      </section>

      <section>
        {/* projects table section */}
        <div className="w-full h-fit mt-7 flex flex-col  ">
          <div className="w-full h-fit flex flex-row items-start justify-between  ">
            <h3 className="font-bold font-satoshi md:text-xl text-lg lg:text-2xl text-[#1C1B1C] ">
              API Projects
            </h3>
            <Link className=" text-[#0A84FF] font-medium font-satoshi text-sm md:text-base p-1 ">
              See all
            </Link>
          </div>
          <div className="w-full h-[286px] overflow-y-hidden overflow-x-scroll  mt-4 drop-shadow-sm rounded-lg border-b border-[#E6E1E2]">
            <ProjectsTable />
          </div>
        </div>
      </section>
      <section>
        {/* Request activities section */}
        <div className="w-full h-fit mt-7 flex flex-col">
          <div className="w-full h-fit flex flex-row items-start justify-between  ">
            <h3 className="font-bold font-satoshi md:text-xl text-lg lg:text-2xl text-[#1C1B1C] ">
              Request Activities
            </h3>
            <Link className=" text-[#0A84FF] font-medium font-satoshi text-sm md:text-base p-1 ">
              See all
            </Link>
          </div>
          <div className="w-full h-fit my-5 drop-shadow-md">
            {latestRequests.map((request)=>(
              <RequestCard key={request.time} request={request} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
