import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../Components/Shared/Nav';


function MainLayout() {
  return (
    <div className=" w-full md:max-w-[600px] md:mx-auto border-2 border-gray-700 h-[100dvh] relative overflow-hidden flex flex-col bg-white ">
      <div className='flex-1 mb-26 overflow-y-auto'>
        <Outlet />
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-gray-100 z-20">
      
         <Nav/>
      </div>
       
    </div>
  )
}

export default MainLayout;