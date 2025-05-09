import React from 'react'
import DashboardHeader from './DashboardHeader'
import { Outlet } from 'react-router'

function UserDashboardLayout() {
  
  return (
    <div className='w-full h-screen bg-Bgprimary overflow-hidden'>
    <DashboardHeader/>

    <div id='dashboardlayout'  >
      <Outlet/>
    </div>
    
    </div>
  )
}

export default UserDashboardLayout
