import React from 'react'
import { Outlet } from 'react-router'

function AuthLayout() {
  return (
    <div id='authDetail'>

        <Outlet/>
      
    </div>
  )
}

export default AuthLayout
