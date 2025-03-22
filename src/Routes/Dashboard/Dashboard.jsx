import React from 'react'
import DashboardHeader from './DashboardHeader'
import { Outlet } from 'react-router'

function Dashboard() {
  
  return (
    <>
    <DashboardHeader/>

    <div id='dashboardlayout' >
      <Outlet/>
    </div>
    
    </>
  )
}

export default Dashboard
