import React from "react";
import { projectData } from "../../../../constants/Projects/ProjectConstant";

function ProjectsTable() {
  const formatDate = (timestamp) => {
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
    <div className="w-full h-fit bg-Bgprimary border border-[#4C4F55]  no-scrollbar overflow-x-auto lg:overflow-hidden rounded-lg">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-Bghilight text-heading text-left">
          <tr className="h-[60px] text-left">
            <th className="w-5/12 font-satoshi font-bold text-sm md:text-base capitalize px-5 py-3">
              Projects
            </th>
            <th className="w-1/4font-satoshi font-bold text-sm md:text-base px-5 capitalize py-3 text-left">
              Status
            </th>
            <th className="w-1/4font-satoshi font-bold text-sm md:text-base px-5 capitalize py-3 text-left">
              Endpoints
            </th>
            <th className="w-1/8font-satoshi font-bold text-sm md:text-base px-5 capitalize py-3 text-left">
              Last Updated
            </th>
          </tr>
        </thead>

        <tbody>
          {projectData.map((project) => (
            <tr
              key={project.project_id}
              className="border-b border-[#4C4F55] text-heading "
            >
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal ">
                {project.name}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal">
                {project.status}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal ">
                {project.modules?.length}
              </td>
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal">
                {formatDate(project.lastUpdated)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
