import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";

function AssignProjectTable({ data, setEdit, setEditId }) {
  const navigate = useNavigate();

  const statusUpdater = (status) => {
    if (status == true) {
      return "in progress";
    } else {
      return "completed";
    }
  };

  return (
    <div className="w-full  bg-Bgprimary border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
      <table className="w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-Bghilight">
          <tr className="h-[65px]">
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              project name
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              status
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              members
            </th>

            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#4C4F55]/30">
          {data.map((project, index) => (
            <tr
              key={project.projectAID}
              className={`bg-Bgprimary text-heading hover:bg-[#4C4F55]/10 transition-colors duration-200 ${
                index % 2 === 0 ? "bg-opacity-100" : "bg-opacity-95"
              }`}
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal ">
                {project.projectName}
              </td>
              <td className="px-6 py-5 text-left">
                <span
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium font-satoshi whitespace-nowrap ${
                    project.isActive === true
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-green-500/20 text-[#30D158] border border-green-500/30"
                  }`}
                >
                  {statusUpdater(project.isActive)}
                </span>
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal "></td>

              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      navigate(`/admin/assign/${project.projectAID}`)
                    }
                    className="inline-flex cursor-pointer items-center justify-center px-4 py-2.5 bg-[#3A3D44] hover:bg-[#4A4D54] text-white font-satoshi font-medium text-xs md:text-sm rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3A3D44]/50"
                  >
                    View
                  </button>
                  <button
                    className="inline-flex cursor-pointer items-center justify-center p-2.5 border border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A]/10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
                    title="Edit Project"
                  >
                    <FiEdit className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    className="inline-flex cursor-pointer items-center justify-center p-2.5 border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/10 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50"
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
}

export default AssignProjectTable;
