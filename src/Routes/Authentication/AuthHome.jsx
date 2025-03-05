import React from 'react'
import { Outlet } from 'react-router'

function AuthHome() {
  return (
    <div id='authDetail'>

        <Outlet/>
      
    </div>
  )
}

export default AuthHome
