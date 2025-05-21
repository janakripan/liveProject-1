import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router";

function DeveloperTable({ data, setEdit, setEditId }) {
  const navigate = useNavigate();
  console.log(data);
  const handleViewClick = (developerId) => {
    navigate(`/admin/developer/${developerId}`);
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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data) => (
            <tr
              key={data.developerAID}
              className=" border border-Bghilight text-heading"
            >
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.userID}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.developerName}
              </td>
              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                {data.developerRole}
              </td>

              <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal  ">
                <div className="w-full h-full flex flex-row items-center gap-x-2.5">
                  <button
                    onClick={() => handleViewClick(data.developerAID)}
                    className="py-1.5 hover:scale-110 transition-all duration-300 px-2.5 flex items-center justify-center bg-[#3A3D44] text-white font-sans rounded-md font-medium text-xs md:text-base hover:cursor-pointer"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setEdit(true);
                      setEditId(data.developerAID);
                    }}
                    className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium border border-[#16A34A] text-[#16A34A] text-sm md:text-xl hover:cursor-pointer "
                  >
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
