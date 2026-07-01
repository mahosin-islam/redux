import { Banknote, CreditCard, Home, Smartphone } from 'lucide-react'
import React from 'react'

function Navbar() {

const navbar=[
  {id:1,label:"Home",icon:<Home size={22} />},
  {id:1,label:"MFS",icon:<Smartphone size={22} />},
  {id:1,label:"Banck",icon:<Banknote size={22} />},
  {id:1,label:"Card",icon:<CreditCard size={22} />},
]

  return (
    <div className="bg-red-300 flex bottom-0 left-0 right-0 border-2 border-gray-200 shadow ">
       <div className="flex justify-between items-center w-full px-5 py-2">
            {navbar.map((item)=>{
              <button 
              key={item.id}
              className="flex flex-col items-center justify-center gap-1 text-2xl text-gray-500 "
              >
                   <div>{item.icon}</div>
                   <span>{item.label}</span>
              </button>
            })}
       </div>
    </div>
  )
}

export default Navbar