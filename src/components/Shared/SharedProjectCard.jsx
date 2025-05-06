import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

const SharedProjectCard = ({ items,onClick }) => {
    const createdDate = new Date(items.created * 1000).toLocaleDateString('en-GB');
    
    const updatedDate = new Date(items.lastUpdated * 1000).toLocaleDateString('en-GB');

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
    <div onClick={onClick} className=" cursor-pointer w-full h-fit p-5 bg-Bgsecondary rounded-xl  ">
      <div className="w-full h-fit flex flex-col items-start lg:flex-row justify-between lg:items-center gap-2 mb-2 ">
        <h2 className="font-satoshi font-bold whitespace-nowrap capitalize text-heading text-lg md:text-xl lg:text-2xl ">
          {items.name}
        </h2>
        <div className="text-[#30D158] py-2.5 px-5 rounded-full font-satoshi font-medium text-sm capitalize bg-[#30D15833] ">
          {items.status}
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-2  items-start">
        <div className="w-full h-fit flex flex-row items-center gap-2 text-commontext  ">
          <div className="text-commontext text-2xl">
            <FaUsers />
          </div>
          <div className="w-fit h-fit flex flex-row ">
            {items.developers.map((dev, index) => {
              const randomColor =
                bgColors[Math.floor(Math.random() * bgColors.length)];
              return (
                <div
                  key={dev.developer_id}
                  className={` w-8 aspect-square rounded-full border border-white text-heading text-sm font-satoshi font-medium flex items-center justify-center ${randomColor} ${
                    index !== 0 ? "-ml-4" : ""
                  } `}
                >
                  {dev.name.slice(0, 2).toUpperCase()}
                </div>
              );
            })}
          </div>
          <div className="w-fit h-fit text-base text-commontext font-satoshi">
            members

          </div>
        </div>

        <div className="w-full h-fit flex flex-row items-center gap-2 text-commontext" >
            <div className="text-commontext text-2xl">
                <FaCalendarAlt/>
            </div>
            <span className="w-fit h-fit text-base text-commontext font-satoshi">
                created: {createdDate}

            </span>

        </div>
        <div className="w-full h-fit flex flex-row items-center gap-2 text-commontext">
            <div className="text-commontext text-2xl">
                <FaClock/>
            </div>
            <span className="w-fit h-fit text-base text-commontext font-satoshi">
                last updated: {updatedDate}
            </span>

        </div>
      </div>
    </div>
  );
};

export default SharedProjectCard;
