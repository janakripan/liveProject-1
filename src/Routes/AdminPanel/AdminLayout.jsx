import React from 'react'
import { Outlet } from 'react-router'
import AdminSidebar from './AdminSidebar'
import { useSidebar } from '../../contexts/admin/SidebarContext';

function AdminLayout() {
  const { isOpen } = useSidebar();
  return (
    <div className={`w-full flex flex-col  h-screen transition-all duration-300 overflow-y-auto relative
  ${isOpen?"pl-[280px]" : "pl-[44px] md:pl-[80px] "}`}>
      
    <AdminSidebar/>

      <div id='adminDetail'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout