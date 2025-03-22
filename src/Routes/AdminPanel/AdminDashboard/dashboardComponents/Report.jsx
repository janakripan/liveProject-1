import React from "react";
import { projectData } from "../../../../constants/Projects/ProjectConstant";
import developer from "../../../../assets/developer-badge.svg";
import endpoints from "../../../../assets/endpointsBadge.svg";
import projects from "../../../../assets/project-badge.svg";

function Report() {
  const data = projectData;

  const projectCount = data.length;
  console.log(projectCount);
  return (
    <div className="w-full h-fit grid grid-cols-3 gap-4">
      <div className="w-full bg-white flex flex-col items-start h-fit drop-shadow-2xl rounded-xl p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h5 className="text-[#AEAAAB] text-base uppercase font-bold font-satoshi ">
            Total Projects
          </h5>
          <img src={projects} alt="project badge" />
        </div>
        <div className="w-fit h-[65px] bg-amber-200 flex flex-col justify-end">
          <h4 className=" text-5xl bg-green-300 font-bold text-[#1C1B1C] font-satoshi ">
            {projectCount}
          </h4>
        </div>
      </div>

      <div className="w-full bg-white flex flex-col items-start h-fit drop-shadow-2xl rounded-xl p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h5 className="text-[#AEAAAB] text-base uppercase font-bold font-satoshi ">
            Total Projects
          </h5>
          <img src={projects} alt="project badge" />
        </div>
        <div className="w-fit h-[65px] bg-amber-200 flex flex-col justify-end">
          <h4 className=" text-5xl bg-green-300 font-bold text-[#1C1B1C] font-satoshi ">
            {projectCount}
          </h4>
        </div>
      </div>

      <div className="w-full bg-white flex flex-col items-start h-fit drop-shadow-2xl rounded-xl p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h5 className="text-[#AEAAAB] text-base uppercase font-bold font-satoshi ">
            Total Projects
          </h5>
          <img src={projects} alt="project badge" />
        </div>
        <div className="w-fit h-[65px] bg-amber-200 flex flex-col justify-end">
          <h4 className=" text-5xl bg-green-300 font-bold text-[#1C1B1C] font-satoshi ">
            {projectCount}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Report;
