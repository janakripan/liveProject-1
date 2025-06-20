import React from 'react'


const AssignedDevelopersTable = ({data,singleProject}) => {
    console.log(data)

   
  return (
    <div className="w-full  bg-Bgprimary border border-[#4C4F55] overflow-x-auto no-scrollbar rounded-lg ">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-Bghilight text-left">
              <tr className="h-[60px] text-heading text-left">
                <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
                  Developer name
                </th>
                <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
                  Role
                </th>
                <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
                  Project
                </th>
              
                <th className="text-sm md:text-base font-satoshi font-bold capitalize px-5 py-3">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((dev) => (
                <tr key={dev.developerAID} className=" border bg-Bgprimary text-heading border-[#4C4F55]">
                  <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal">
                    {dev.developerName}
                  </td>
                  <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal">
                    {dev.developerRole}
                  </td>
                  <td className="md:px-5 px-2 md:py-4 py-2 text-left font-satoshi text-xs md:text-base font-normal">
                   {singleProject.projectName}
                  </td>
                  
                  <td className="md:px-5 px-2 md:py-4 py-2  font-satoshi text-xs md:text-base font-normal text-center ">
                    <div className="w-fit h-full flex flex-row items-center gap-x-2.5">
                      <button 
                     
                      className="py-1.5 hover:scale-110 transition-all duration-300 px-2.5 flex items-center justify-center bg-[#3A3D44] text-white font-sans rounded-md font-medium text-sm md:text-base hover:cursor-pointer ">
                        View
                      </button>
                      <button 
                      
                      className="py-1.5 hover:scale-110 transition-all duration-300  px-2.5 flex items-center justify-center rounded-md font-medium whitespace-nowrap text-heading bg-[#FF375F] text-sm md:text-xl hover:cursor-pointer ">
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
