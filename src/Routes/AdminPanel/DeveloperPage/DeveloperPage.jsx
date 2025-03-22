import React from 'react'
import { useSidebar } from '../../../contexts/admin/SidebarContext'

function DeveloperPage() {
  const {isOpen, setIsOpen} = useSidebar()
    return (
      <div className={`w-full h-screen max-w-screen-xl  bg-green-200 transition-all duration-300 ${isOpen ? "md:ml-[280px]" : "mx-auto ml-[80px]"}`}>
        dkjbvifv
      </div>
    )
}

export default DeveloperPage
