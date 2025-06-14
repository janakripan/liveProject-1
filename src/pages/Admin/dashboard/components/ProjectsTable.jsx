import React from "react";
import { useProjects } from "../../../../contexts/admin/ProjectApiContext";

function ProjectsTable() {
  const { projects } = useProjects();
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
              {" "}
              Projects
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              {" "}
              Status
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold text-heading text-left px-6 py-4 tracking-wide uppercase">
              {" "}
              Endpoints
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#4C4F55]/30">
          {" "}
          {projects?.map((project, index) => (
            <tr
              key={project.projectAID}
              className={`bg-Bgprimary text-heading hover:bg-[#4C4F55]/10 transition-colors duration-200 ${
                index % 2 === 0 ? "bg-opacity-100" : "bg-opacity-95"
              }`}
            >
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal ">
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
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal ">
                {project.modules?.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
