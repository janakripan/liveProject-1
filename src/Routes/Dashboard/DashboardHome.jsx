import React from 'react'
import { HiMiniFolder } from "react-icons/hi2";
import { dashboardconstant } from '../../constants/dashboardconstant';
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from 'react-router';

function DashboardHome() {
  const getColorForFile = (fileName) => {
    let hash = 0;
    for (let i = 0; i < fileName.length; i++) {
      hash = fileName.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360; 
    return `hsl(${hue}, 70%, 50%)`; 
  };
  
  return (
    <div className='w-full h-[80vh] overflow-y-scroll p-10   bg-[#FAFAFA]' >
      <div className='w-full min-h-full max-w-screen-xl mx-auto p-4 rounded-md drop-shadow-xl shadow-xl ring-1 ring-gray-200 '>
        <h2 className='font-poppins font-semibold text-xl text-gray-900 ml-2'>Projects</h2>
        <ul className='w-full h-full grid grid-cols-3 gap-1 mt-6'>
          {dashboardconstant.map((item,index)=>(
            <div
            key={index}
             className='w-full h-fit p-2 flex items-center justify-between px-6 '>
              <Link className='flex  flex-row items-center justify-between gap-x-6'>
              <div className='text-5xl'>
                <HiMiniFolder style={{color: getColorForFile(item.title||"default")}}/>
              </div>
              <div>
                <h3 className='text-xl font-medium font-poppins'>
                  {item.title}
                </h3>
                <p>
                  {item.date}
                </p>
              </div>
             

              </Link>
               <div>
                <button className='text-lg w-5 h-5 '>
                  <SlOptionsVertical/>
                </button>
              </div>



            </div>
          ))}
        </ul>


      </div>
     
      
    </div>
  )
}

export default DashboardHome
