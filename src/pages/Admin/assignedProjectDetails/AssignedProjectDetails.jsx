import React, { useState } from "react";
import { useParams } from "react-router";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import { FaPlus } from "react-icons/fa6";
import AssignedDevelopersTable from "./components/AssignedDevelopersTable";
import { IoMdClose } from "react-icons/io";
import AssignProjectForm from "../../../pages/Admin/Assign project/components/AssignProjectForm";

const AssignedProjectDetails = () => {

  const { projectId } = useParams();
  const [assign, setAssign] = useState(false);

  const singleProject = projectData.find(
    (pro) => String(pro.project_id) === projectId
  );

  const getDeveloperInitials = (name) => {
    if (!name || name.trim() === "") return "NA";

    const words = name.trim().split(" ").filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    } else {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
  };

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

  const bgColors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-emerald-500",
    "bg-teal-500",
  ];
  return (
    <div
      className={` h-full p-5 relative  transition-all duration-300 flex flex-col w-full max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-fit ">
        <div className="w-full h-fit flex flex-row justify-between items-center ">
          <h1 className="font-satoshi font-bold text-xl text-heading md:text-xl  lg:text-3xl tracking-tight ">
            Project
          </h1>

          <button
            onClick={()=>setAssign(true)}
            className=" bg-buttonBlue cursor-pointer font-satoshi font-bold text-base text-white flex flex-row items-center justify-center gap-x-2.5 px-4 py-3 active:scale-95 rounded-lg hover:scale-105 transition-transform duration-300 "
          >
            <FaPlus /> <span className="hidden md:block">Assign Project</span>
          </button>
        </div>

        <div className="w-full mt-5 h-fit p-6 bg-[#3B3D43] drop-shadow-xl rounded-xl flex flex-row justify-between ">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-heading font-satoshi font-bold text-2xl">
              {singleProject.name}
            </h3>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-commontext text-base font-satoshi font-normal ">
                Status:
              </span>
              <span className=" bg-[#30D15833] text-[#30D158] text-sm px-5 py-2.5 rounded-full ">
                {singleProject.status}
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-commontext text-base font-satoshi font-normal ">
                Developers:
              </span>
              <div className="w-fit h-fit flex flex-row ">
                {singleProject.developers.map((dev, index) => {
                  const randomColor =
                    bgColors[Math.floor(Math.random() * bgColors.length)];
                  return (
                    <div
                      key={dev.developer_id}
                      className={` w-8 aspect-square rounded-full border border-white text-heading text-sm font-satoshi font-medium flex items-center justify-center ${randomColor} ${
                        index !== 0 ? "-ml-4" : ""
                      } `}
                    >
                      {getDeveloperInitials(dev.name)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-y-4  ">
            <div className="flex flex-row gap-x-2">
              <span className="capitalize text-base text-commontext font-satoshi font-normal ">
                created:
              </span>
              <span className="text-heading font-normal text-base font-satoshi">
                {createdTime(singleProject.created)}
              </span>
            </div>

            <div className="flex flex-row gap-x-2">
              <span className="capitalize text-base text-commontext font-satoshi font-normal ">
                last updated :
              </span>
              <span className="text-heading font-normal text-base font-satoshi">
                {updatedTime(singleProject.lastUpdated)}
              </span>
            </div>
          </div>
        </div>

        <div className=" w-full h-fit mt-7 ">
          <h2 className="text-heading text-3xl font-bold font-satoshi">
            Assigned Developers
          </h2>

          <div className="w-full h-fit mt-5 rounded-xl overflow-hidden  ">
            <AssignedDevelopersTable data={singleProject.developers} singleProject={singleProject} />

          </div>
        </div>
      </div>
      {assign && (
        <div className="w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  p-8 ">
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row justify-between ">
              <h3 className="lg:text-2xl text-heading md:text-xl text-lg font-medium font-manrope capitalize ">
                add new developer
              </h3>
              <button
                className="text-xl p-1.5 cursor-pointer bg-buttonBlue text-heading rounded-lg "
                onClick={() => setAssign(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-Bghilight mt-1 mb-4" />
            <AssignProjectForm projectName={singleProject.name}
             
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedProjectDetails;
