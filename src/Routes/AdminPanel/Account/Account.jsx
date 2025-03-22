import React from 'react'
import { useSidebar } from '../../../contexts/admin/SidebarContext'

function Account() {
  const {isOpen, setIsOpen} = useSidebar()
    return (
      <div className={`w-full h-screen max-w-screen-xl  bg-violet-200 transition-all duration-300 ${isOpen ? "md:ml-[280px]" : "mx-auto ml-[80px]"}`}>
        dkjbvifv
      </div>
    )
}

export default Account
