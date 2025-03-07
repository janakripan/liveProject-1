import React, { useState } from 'react'
import { requestaLinks } from '../../../constants/detailsconstant'

function RequestPage() {
    const [changed , setChanged] = useState("params")

    const handleClick = (value) =>{
        setChanged(value)
        
    }
  return (
    <div className='w-full h-full  '>

        <div className='w-fit h-fit  '>
            <ul className='w-full h-full flex flex-row gap-x-6'>
                {requestaLinks.map((items, index)=>(
                    <li key={index} className='w-fit h-fit'>
                        <button
                        onClick={()=>handleClick(items.path)}
                         className={`px-[18px] py-2 text-[#8C8C8C] text-base font-poppins  rounded-lg transition-all duration-200
                              ${
                                changed === items.path
                                ? "text-gray-900 bg-[#FACC15] "
                                : ""
                                    
                                }
                              }`}>
                            {items.title}

                        </button>
                    </li>
                ))}
            </ul>

        </div>
      
    </div>
  )
}

export default RequestPage
