import React from 'react'
import { FiEdit } from 'react-icons/fi';

const AssignedDevelopersTable = ({data,singleProject}) => {
    console.log(data)

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
    <div className="w-full  bg-Bghilight border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-Bghilight text-left">
              <tr className="h-[60px] text-heading text-left">
                <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
                  Developer name
                </th>
                <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
                  Role
                </th>
                <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
                  Project
                </th>
                <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
                  created
                </th>
                <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
                  last updated
                </th>
                <th className="text-base font-satoshi font-bold capitalize px-5 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((dev) => (
                <tr key={dev.developer_id} className=" border bg-Bgprimary text-heading border-[#4C4F55]">
                  <td className="px-5 py-4 text-left font-satoshi text-base font-normal ">
                    {dev.name}
                  </td>
                  <td className="px-5 py-4 text-left font-satoshi text-base font-normal ">
                    {dev.role}
                  </td>
                  <td className="px-5 py-4 text-left font-satoshi text-base font-normal ">
                   {singleProject.name}
                  </td>
                  <td className="px-5 py-4 text-left font-satoshi text-base font-normal ">
                    {createdTime(dev.created)}
                  </td>
                  <td className="px-5 py-4 text-left font-satoshi text-base font-normal ">
                    {updatedTime(dev.lastUpdated)}
                  </td>
                  <td className="px-5 py-4 w-fit text-center font-satoshi text-base font-normal ">
                    <div className="w-fit h-full flex flex-row items-center gap-x-2.5">
                      <button 
                     
                      className="py-1.5 hover:scale-110 transition-all duration-300 px-2.5 flex items-center justify-center bg-[#3A3D44] text-white font-sans rounded-md font-medium text-base hover:cursor-pointer ">
                        View
                      </button>
                      <button 
                      
                      className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium  text-heading bg-[#FF375F] text-xl hover:cursor-pointer ">
                       un-assign
                      </button>
                     
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default AssignedDevelopersTable
