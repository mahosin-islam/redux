import { Banknote, CreditCard, Home, Smartphone, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

function Nav() {

const navbar=[
  {id:1,label:"Home",icon:<Home size={25} />,path:"/"},
  {id:2,label:"MFS",icon:<Smartphone size={25} />,path:"/successful"},
  {id:3,label:"Banck",icon:<Banknote size={25} />,path:"/bank"},
  {id:4,label:"Card",icon:<CreditCard size={25} />,path:"/card"},
  {id:5,label:"Profile",icon:<User size={25} />,path:"/profile"},
]

  return (
    <div className=" bg-white flex bottom-0 left-0 right-0 border-2 border-gray-200 shadow ">
       <div className="flex justify-between items-center w-full px-5 py-2">
            {navbar.map((item)=>{
              return <NavLink 
              key={item.id}
              to={item.path}
              className="flex flex-col items-center justify-center gap-1 text-2xl text-gray-500 "
              >
                   <div className='text-[#7E4A9E] font-bold'>{item.icon}</div>
                   <span className='text-[#7E4A9E] font-bold'>{item.label}</span>
              </NavLink>
            })}
       </div>
    </div>
  )
}

export default Nav