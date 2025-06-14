import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router";

const SubmodulesTable = ({ displayData }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const getTimeAgo = (dateString) => {
    if (!dateString) return "Not updated yet";

    const past = new Date(dateString);
    if (isNaN(past.getTime()) || dateString === "0001-01-01T00:00:00") {
      return "Not updated yet"; // Handle invalid or placeholder date
    }

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
  const handleEditClick = (moduleId, subModuleId) => {
    navigate(
      `/admin/project/${projectId}/preview/module/${moduleId}/submodule/${subModuleId}/edit`
    );
  };

  return (
    <div className="w-full  bg-Bgprimary border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
      <table className="w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-Bghilight">
          <tr className="h-[65px]">
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              SL
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              sub Modules
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide">
              STATUS
            </th>

            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              Created
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              {" "}
              Last updated
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              {" "}
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#4C4F55]/30">
          {displayData?.map((module, index) => (
            <tr
              key={module.subModuleID}
              className={`bg-Bgprimary text-heading hover:bg-[#4C4F55]/10 transition-colors duration-200 ${
                index % 2 === 0 ? "bg-opacity-100" : "bg-opacity-95"
              }`}
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {index + 1}
              </td>
              <td className="px-6 py-5 text-left font-satoshi text-sm md:text-base font-medium">
                <div className="flex items-center">
                  <span className="truncate max-w-[200px]" title={""}>
                    {""}
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 text-left">
                <span
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap font-satoshi ${
                    module.isActive === true
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-green-500/20 text-[#30D158] border border-green-500/30"
                  }`}
                >
                  {statusUpdater(module.isActive)}
                </span>
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {module.createdDate.slice(0, 10)}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {getTimeAgo(module.updatedDate)}
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  {/* <button
                    // onClick={() =>
                    //   navigate(
                    //     `/admin/project/${displayData.project_id}/modules/${module.module_id}`
                    //   )
                    // }
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-[#3A3D44] hover:bg-[#4A4D54] text-white font-satoshi font-medium text-xs md:text-sm rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3A3D44]/50"
                  >
                    View
                  </button> */}
                  <button
                    onClick={() =>
                      handleEditClick(module.moduleID, module.subModuleID)
                    }
                    className="inline-flex items-center justify-center p-2.5 border border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A]/10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
                    title="Edit Project"
                  >
                    <FiEdit className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center p-2.5 border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50"
                    title="Delete Project"
                  >
                    <RiDeleteBin5Line className="w-4 h-4 md:w-5 md:h-5" />
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

export default SubmodulesTable;
