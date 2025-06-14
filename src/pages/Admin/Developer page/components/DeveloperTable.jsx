import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";

function DeveloperTable({ data, setEdit, setEditId }) {
  const navigate = useNavigate();
  console.log(data);
  const handleViewClick = (developerId) => {
    navigate(`/admin/developer/${developerId}`);
  };

  return (
    <div className="w-full  bg-Bgprimary border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
      <table className="w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-Bghilight">
          <tr className="h-[65px]">
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              User ID
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              User name
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              role
            </th>

            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#4C4F55]/30">
          {data?.map((data, index) => (
            <tr
              key={data.developerAID}
              className={`bg-Bgprimary text-heading hover:bg-[#4C4F55]/10 transition-colors duration-200 ${
                index % 2 === 0 ? "bg-opacity-100" : "bg-opacity-95"
              }`}
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.userID}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.developerName}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.developerRole}
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleViewClick(data.developerAID)}
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-[#3A3D44] hover:bg-[#4A4D54] text-white font-satoshi font-medium text-xs md:text-sm rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3A3D44]/50"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setEdit(true);
                      setEditId(data.developerAID);
                    }}
                    className="inline-flex items-center justify-center p-2.5 border border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A]/10 rounded-lg transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]/50"
                    title="Edit Project"
                  >
                    <FiEdit className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <button
                    className="inline-flex items-center justify-center p-2.5 border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/10 rounded-lg transition-all duration-200  cursor-pointer hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#DC2626]/50"
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

export default DeveloperTable;
