import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";

const ProjectModulesTable = ({ displayData, setEdit, setEditModuleId }) => {
  const navigate = useNavigate();

  const getTimeAgo = (dateString) => {
    if (!dateString) return "No date";

    const past = new Date(dateString);
    if (isNaN(past.getTime())) return "Invalid date";

    const now = new Date();
    const diff = Math.floor((now - past) / 1000);

    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} minute(s) ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hour(s) ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} day(s) ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} month(s) ago`;
    return `${Math.floor(diff / 31536000)} year(s) ago`;
  };

  const statusUpdater = (status) => {
    if (status == true) {
      return "in progress";
    } else {
      return "completed";
    }
  };
  if (!displayData.length) {
    return (
      <div className="w-full h-full min-h-[500px] flex flex-row items-center justify-center">
        <span className="capitalize font-satoshi font-bold text-3xl text-heading  ">
          there are no modules in this project
        </span>
      </div>
    );
  }

  return (
    <div className="w-full  bg-Bgprimary border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
      <table className="w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-Bghilight text-left">
          <tr className="h-[60px] text-heading text-left">
            <th className="text-sm md:text-base font-satoshi font-bold uppercase  text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              SL
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold uppercase text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              Modules
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold uppercase text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              Status
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold uppercase text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              Submodules
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold uppercase text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              Created
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold uppercase text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              Last updated
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold uppercase text-heading text-left px-6 py-4 tracking-wide">
              {" "}
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#4C4F55]/30">
          {displayData?.map((module, index) => (
            <tr
              key={module.moduleID}
              className={`bg-Bgprimary text-heading hover:bg-[#4C4F55]/10 transition-colors duration-200 ${
                index % 2 === 0 ? "bg-opacity-100" : "bg-opacity-95"
              }`}
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal ">
                {index + 1}
              </td>
              <td className="px-6 py-5 text-left font-satoshi text-sm md:text-base font-medium">
                <div className="flex items-center">
                  <span
                    className="truncate max-w-[200px]"
                    title={module.moduleName}
                  >
                    {module.moduleName}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-left">
                <span
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium font-satoshi whitespace-nowrap ${
                    module.isActive === true
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-green-500/20 text-[#30D158] border border-green-500/30"
                  }`}
                >
                  {statusUpdater(module.isActive)}
                </span>
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal ">
                {module.subModules?.length}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-sm font-normal ">
                {module.createdDate.slice(0, 10)}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-sm font-normal ">
                {getTimeAgo(module?.updatedDate)}
              </td>
              
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      navigate(
                        `/admin/project/${module.projectAID}/modules/${module.moduleID}`
                      )
                    }
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-[#3A3D44] hover:bg-[#4A4D54] text-white font-satoshi font-medium text-xs md:text-sm rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3A3D44]/50"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setEdit(true);
                      setEditModuleId(module.moduleID);
                    }}
                    className="inline-flex items-center justify-center p-2.5 border border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A]/10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
                    title="Edit Project"
                  >
                    <FiEdit className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#DC2626] text-[#DC2626] text-sm md:text-xl hover:cursor-pointer ">
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectModulesTable;
