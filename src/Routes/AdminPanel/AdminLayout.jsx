import React from 'react'
import { Outlet } from 'react-router'
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-auto'>
      
    <AdminSidebar/>

      <div id='adminDetail'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout