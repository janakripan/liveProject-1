import React from "react";
import { projectData } from "../../../../constants/Projects/ProjectConstant";
import developer from "../../../../assets/developer-badge.svg";
import endpoints from "../../../../assets/endpointsBadge.svg";
import project from "../../../../assets/project-badge.svg";
import { useProjects } from "../../../../contexts/admin/ProjectApiContext";
import { useDevelopers } from "../../../../contexts/admin/DevApiContext";

function Report() {
 const {projects} = useProjects()
 const {developers} = useDevelopers()

  const projectCount = projects?.length;
 

  const developerCount = developers?.length;


  const endpointCount = 0;
  console.log(endpointCount)
  return (
    <div className="w-full h-fit grid grid-cols-1  md:grid-cols-3 gap-4">
      <div className="w-full bg-Bghilight flex flex-col items-start h-fit drop-shadow-xl   rounded-xl p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h5 className="text-commontext whitespace-nowrap text-sm md:text-base uppercase font-bold font-satoshi ">
            Total Projects
          </h5>
          <img src={project} alt="project badge" />
        </div>
        <div className="w-fit h-[65px] flex flex-col justify-end">
          <h4 className="text-2xl md:text-4xl lg:text-5xl  font-bold text-heading font-satoshi ">
            {projectCount}
          </h4>
        </div>
      </div>

      <div className="w-full bg-Bghilight flex flex-col items-start h-fit drop-shadow-xl rounded-xl p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h5 className="text-commontext whitespace-nowrap text-sm md:text-base uppercase font-bold font-satoshi ">
          Active endpoints
          </h5>
          <img src={endpoints} alt="project badge" />
        </div>
        <div className="w-fit h-[65px]  flex flex-col justify-end">
          <h4 className=" text-2xl md:text-4xl lg:text-5xl  font-bold text-heading font-satoshi ">
            {endpointCount}
          </h4>
        </div>
      </div>

      <div className="w-full bg-Bghilight flex flex-col items-start h-fit drop-shadow-xl rounded-xl p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h5 className="text-commontext text-sm md:text-base uppercase font-bold whitespace-nowrap font-satoshi ">
          Total developers
          </h5>
          <img src={developer} alt="project badge" />
        </div>
        <div className="w-fit h-[65px]  flex flex-col justify-end">
          <h4 className=" text-2xl md:text-4xl lg:text-5xl  font-bold text-heading font-satoshi ">
            {developerCount}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Report;
