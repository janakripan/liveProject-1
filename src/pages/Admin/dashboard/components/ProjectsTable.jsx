import React from "react";
import { useProjects } from "../../../../contexts/admin/ProjectApiContext";

function ProjectsTable() {
  const {projects} = useProjects()
  const statusUpdater = (status)=>{
  if(status == true){
    return "in progress"
  }else{return "completed"}
}

  
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
            
          </tr>
        </thead>

        <tbody>
          {projects?.map((project) => (
            <tr
              key={project.projectAID}
              className="border-b border-[#4C4F55] text-heading "
            >
              <td className="px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal ">
                {project.projectName}
              </td>
              <td className={`px-5 py-4 text-left font-satoshi text-xs md:text-base font-normal ${project.isActive === true ?" text-yellow-500  " :"text-[#30D158] "}  `}>
                {statusUpdater(project.isActive)}
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
