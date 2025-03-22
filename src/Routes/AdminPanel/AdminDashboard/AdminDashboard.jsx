import React from "react";
import { useSidebar } from "../../../contexts/admin/SidebarContext";
import Report from "./dashboardComponents/Report";

function AdminDashboard() {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`w-full h-screen max-w-screen-xl px-5 py-7 bg-red-200 transition-all duration-300 ${
        isOpen ? "md:ml-[280px]" : " mx-[80px] w-[80%] "
      }`}
    >
      <div className="w-full h-fit">
        <h1 className="text-[26px] font-bold bg-emerald-700 capitalize font-satoshi text-[#1C1B1C] ">
          Dashboard
        </h1>
        <p className="font-satoshi font-medium bg-red-400 text-base text-[#605E5F] mt-1 ">
        Overview of your API projects and activity
        </p>

      </div>
      <div className="w-full h-fit  ">
        <Report/>
      </div>
    </div>
  );
}

export default AdminDashboard;
