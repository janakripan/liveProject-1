import React from 'react'
import { sidebarconstant } from '../../../constants/detailsconstant'
import SidebarCard from './SidebarCard'

function DetailsSidebar() {
  return (
    <div className='w-full h-full  px-2 '>
        <ul className='w-full h-fit '>
            {sidebarconstant.map((items,index)=>(
               <SidebarCard
               key={index}
               items={items}
               />

            ))}

        </ul>
      
    </div>
  )
}

export default DetailsSidebar
