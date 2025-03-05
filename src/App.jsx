import React from 'react'
import { Outlet } from 'react-router'



export default function App() {
  return (
    <>
    <h1>
      welcome
    </h1>

    <div id='detail'>
      <Outlet/>
    </div>

    
    </>
  )
}
