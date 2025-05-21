import React, { useState } from "react";
import { useParams } from "react-router";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import SharedProjectCard from "../../../components/Shared/SharedProjectCard";
import { IoMdClose } from "react-icons/io";
import EditDeveloperForm from "../../../components/Shared/EditDeveloperForm";
import { useSidebar } from "../../../contexts/admin/SidebarContext";
import { useDevelopers } from "../../../contexts/admin/DevApiContext";
import loader from '../../../assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg'

const DeveloperDetailsPage = () => {
  const { developerId } = useParams();
  const [edit, setEdit] = useState(false);
  const { isOpen } = useSidebar();
   const { developers, isLoading, error } = useDevelopers();
   console.log(developerId)

  const singleDeveloper = developers?.find(
    dev => String(dev.developerAID) === String(developerId)
  );
  
  console.log(singleDeveloper)

  const getDeveloperInitials = (name) => {
    if (!name || name.trim() === "") return "NA";

    const words = name.trim().split(" ").filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    } else {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
  };
  
  const assignedProjects = projectData.filter((project) =>
    project.developers.some(
      (dev) => String(dev.userID) === String(developerId)
    )
  );


  const editData = {
    userID: singleDeveloper.userID,
    developerName: singleDeveloper.developerName,
    developerRole: singleDeveloper.developerRole,
    password: singleDeveloper.password,
  };


  if (isLoading)
      return (
        <div className="w-full h-screen bg-Bgprimary flex flex-row items-center justify-center">
          {" "}
          <img src={loader} alt="loading animation" className="w-20 h-20" />{" "}
        </div>
      );
    if (error)
      return (
        <div className="w-full h-screen flex flex-row bg-Bgprimary items-center justify-center">
          {" "}
          <p className="font-bold text-xl font-satoshi text-white">
            Error fetching developers
          </p>
        </div>
      );

  return (
    <div
      className={` h-full p-5 relative  transition-all duration-300 flex flex-col w-full max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-full ">
        <div className="w-full h-fit md:p-6 p-4 bg-[#3B3D43] drop-shadow-xl rounded-xl flex flex-col gap-5 md:flex-row justify-between ">
          <div className="h-full w-fit flex flex-row gap-x-4 items-center ">
            <div className=" p-[25px] bg-[#30738D] aspect-square rounded-full flex items-center justify-center text-5xl text-heading font-nunito font-bold ">
              {getDeveloperInitials(singleDeveloper.developerName)}
            </div>

            <div className=" flex flex-col gap-y-1">
              <h1 className="text-heading font-bold font-satoshi capitalize text-3xl  ">
                {singleDeveloper.developerName}
              </h1>
              <span className=" font-satoshi font-normal text-base text-commontext ">
                {singleDeveloper.userID}
              </span>
              <span className=" font-satoshi font-normal text-base text-commontext ">
                {singleDeveloper.developerRole}
              </span>
              
            </div>
          </div>

          <div className="w-fit h-full flex flex-row items-start gap-x-4 ">
            <button
              onClick={() => setEdit(true)}
              className=" whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150 py-3 px-4 rounded-lg text-heading capitalize font-satoshi font-bold text-xs md:text-base bg-buttonBlue flex justify-center items-center gap-1 "
            >
              <FaEdit /> <span>edit profile</span>
            </button>
            

            <button className=" whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150 py-3 px-4 rounded-lg text-heading capitalize font-satoshi font-bold text-xs md:text-base bg-[#FF375F] flex justify-center items-center gap-1 ">
              <RiDeleteBin6Fill />
              <span> Delete account</span>
            </button>
          </div>
        </div>

        <div className="w-full h-fit mt-5  ">
          <h2 className=" text-heading font-bold font-satoshi text-[26px] ">
            Projects
          </h2>
          <div className="w-full h-fit mt-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            {assignedProjects.map((items) => (
              <SharedProjectCard key={items.project_id} items={items} />
            ))}
          </div>
        </div>
      </div>
      {edit && (
        <div
          className={`w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  transition-all duration-300 p-8 ${
            isOpen ? "pl-[290px] " : ""
          }`}
        >
          {" "}
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row justify-between ">
              <h3 className="lg:text-2xl text-heading md:text-xl text-lg font-medium font-manrope capitalize ">
                Edit Developer details
              </h3>
              <button
                className="text-xl p-1.5 cursor-pointer bg-buttonBlue text-heading rounded-lg "
                onClick={() => setEdit(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-Bghilight mt-1 mb-4" />
            <EditDeveloperForm setEdit={setEdit} editData={editData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperDetailsPage;
