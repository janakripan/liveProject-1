import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

function ProjectTable({ data }) {
  const createdTime = (timestamps) => {
    const date = new Date(timestamps * 1000);
    return date.toLocaleDateString("en-GB");
  };

  const updatedTime = (timestamp) => {
    const now = new Date();
    const date = new Date(parseInt(timestamp) * 1000);
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };
  return (
    <div className="w-full h-fit bg-white border border-[#E6E1E2] overflow-x-auto rounded-lg ">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-[#F5F7F9] text-left">
          <tr className="h-[60px] text-left">
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              project name
            </th>
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              description
            </th>
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              open API url
            </th>
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              status
            </th>
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              created
            </th>
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              last updated
            </th>
            <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((project) => (
            <tr key={project.project_id} className=" border border-[#E6E1E2]">
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                {project.name}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                {project.description}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                {project.base_url}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                {project.status}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                {createdTime(project.created)}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                {updatedTime(project.lastUpdated)}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-base font-normal text-black">
                <div className="w-full h-full flex flex-row items-center gap-x-2.5">
                  <button className="py-1.5 hover:scale-110 transition-all duration-300 px-2.5 flex items-center justify-center bg-[#333333] text-white font-sans rounded-md font-medium text-base ">
                    View
                  </button>
                  <button className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#16A34A] text-[#16A34A] text-xl ">
                    <FiEdit />
                  </button>
                  <button className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#DC2626] text-[#DC2626] text-xl ">
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
}

export default ProjectTable;
