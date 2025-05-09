import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router";

const SubmodulesTable = ({
  displayData,
  
}) => {
  const navigate = useNavigate()
  const {projectId} = useParams()
  console.log(projectId)

  function formatUnixDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const formatted = date.toLocaleDateString("en-GB");
    return formatted;
  }
 
  function timeAgo(unixTimestamp) {
    const now = Date.now();
    const updated = new Date(unixTimestamp * 1000).getTime();
    const diffInSeconds = Math.floor((now - updated) / 1000);
  
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);
  
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  }
  const handleEditClick = (moduleId,subModuleId) =>{
    navigate(`/admin/project/${projectId}/preview/module/${moduleId}/submodule/${subModuleId}/edit`);
  }

  return (
    <div className="w-full  bg-Bgprimary border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-Bghilight text-left">
          <tr className="h-[60px] text-heading text-left">
            <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              SL
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
             sub Modules
            </th>
            
            <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              Created
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              {" "}
              Last updated
            </th>
            <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              {" "}
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {displayData.sub_modules?.map((module, index) => (
            
            <tr
              key={module.sub_module_id}
              className=" border bg-Bgprimary text-heading border-[#4C4F55]"
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {index + 1}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {module.name}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {formatUnixDate(module.created)}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {timeAgo(module.lastUpdated)}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                <div className="w-full h-full flex flex-row items-center justify-between gap-x-2.5">
                  <button
                    // onClick={() =>
                    //   navigate(
                    //     `/admin/project/${displayData.project_id}/modules/${module.module_id}`
                    //   )
                    // }
                    className="py-1.5 hover:scale-110 transition-all duration-300 px-2.5 flex items-center justify-center bg-[#3A3D44] text-white font-sans rounded-md font-medium text-xs md:text-base hover:cursor-pointer "
                  >
                    View
                  </button>
                  <button
                    onClick={handleEditClick}
                    className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#16A34A] text-[#16A34A] text-sm md:text-xl hover:cursor-pointer "
                  >
                    <FiEdit />
                  </button>
                  <button className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#DC2626] text-[#DC2626] text-sm md:text-xl hover:cursor-pointer ">
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
};

export default SubmodulesTable;
