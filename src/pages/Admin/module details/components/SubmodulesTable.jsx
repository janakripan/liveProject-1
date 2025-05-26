import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate, useParams } from "react-router";

const SubmodulesTable = ({ displayData }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

const getTimeAgo = (dateString) => {
  if (!dateString) return "Not updated yet";

  const past = new Date(dateString);
  if (isNaN(past.getTime()) || dateString === "0001-01-01T00:00:00") {
    return "Not updated yet";  // Handle invalid or placeholder date
  }

  const now = new Date();
  const diff = Math.floor((now - past) / 1000);

  if (diff < 60) return "Just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} minute(s) ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour(s) ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} day(s) ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} month(s) ago`;
  return `${Math.floor(diff / 31536000)} year(s) ago`;
};
  const statusUpdater = (status)=>{
  if(status == true){
    return "in progress"
  }else{return "completed"}
}
  const handleEditClick = (moduleId, subModuleId) => {
    navigate(
      `/admin/project/${projectId}/preview/module/${moduleId}/submodule/${subModuleId}/edit`
    );
  };

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
          {displayData?.map((module, index) => (
            <tr
              key={module.subModuleID}
              className=" border bg-Bgprimary text-heading border-[#4C4F55]"
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {index + 1}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {""}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {module.createdDate.slice(0, 10)}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {getTimeAgo(module.updatedDate)}
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
                    onClick={()=>handleEditClick(module.moduleID,module.subModuleID)}
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
