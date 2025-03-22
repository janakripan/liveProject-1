import React from 'react'
import { Outlet } from 'react-router'
import AdminSidebar from './AdminSidebar'

function AdminLayout() {
  return (
    <div className='overflow-x-hidden'>
      
    <AdminSidebar/>

      <div id='adminDetail'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout