import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";

function DeveloperTable({ data,setEdit,setEditData }) {
  const navigate = useNavigate();

  const handleViewClick = (developerId) => {
    navigate(`/admin/developer/${developerId}`);
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
  return (
    <div className="w-full h-fit bg-Bgprimary border border-Bghilight overflow-x-auto rounded-lg ">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-Bghilight text-left">
          <tr className="h-[60px] text-heading text-left">
            <th className=" w-1/4 text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              User ID
            </th>
            <th className=" w-1/4 text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              User name
            </th>
            <th className=" w-1/6 text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              role
            </th>
            <th className=" w-1/6 text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              created
            </th>
            <th className=" w-1/6 text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr
              key={data.developer_id}
              className=" border border-Bghilight text-heading"
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.email}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.name}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.role}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {createdTime(data.created)}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                <div className="w-full h-full flex flex-row items-center gap-x-2.5">
                  <button
                    onClick={() => handleViewClick(data.developer_id)}
                    className="py-1.5 hover:scale-110 transition-all duration-300 px-2.5 flex items-center justify-center bg-[#3A3D44] text-white font-sans rounded-md font-medium text-xs md:text-base hover:cursor-pointer"
                  >
                    View
                  </button>
                  <button 
                  onClick={()=>{setEdit(true);setEditData({userId: data.email,
                    name: data.name,
                    role: data.role,
                    password: "",})}}
                  className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#16A34A] text-[#16A34A] text-sm md:text-xl hover:cursor-pointer ">
                    <FiEdit />
                  </button>
                  <button className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#DC2626] text-[#DC2626] text-sm md:text-xl hover:cursor-pointer  ">
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

export default DeveloperTable;
