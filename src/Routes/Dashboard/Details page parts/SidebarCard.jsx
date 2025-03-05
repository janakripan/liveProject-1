import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function SidebarCard({ items }) {
    const [isOpen , setIsOpen] = useState(true)

    const typeColors = {
        put: "bg-[#FACC15]",
        post: "bg-[#38BDF8]",
        delete: "bg-[#F87171]",
        get: "bg-[#4ADE80]",
      };
      
   
  return (
    <div className="w-full h-fit">
      <div className="w-full flex flex-row items-center justify-between my-2">
        <h1 className="font-poppins font-medium text-xl ">{items.title}</h1>
        <button 
        className="p-2  "
        onClick={()=>setIsOpen(!isOpen)}
         >
            {
            isOpen
            ?(<IoIosArrowUp/>)
            :(<IoIosArrowDown/>)
        }

        </button>
      </div>
      {isOpen&&(<div className="w-full h-fit">
        <ul className="w-full flex flex-col gap-y-4">
            {items.requests.map((request,index)=>(
                <li
                key={index}
                 className="w-full flex flex-row justify-between ">
                    <p className=" text-sm font-poppins font-normal">
                        {request.name}
                    </p>
                    <div className={`px-2 py-0.5 font-bold text-xs text-white rounded ${typeColors[request.type]}`}>
                        {request.type}

                    </div>


                </li>
            ))}
        </ul> 
      </div>)}
    </div>
  );
}

export default SidebarCard;
