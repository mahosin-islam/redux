import React, { useState } from 'react'
import Button from './Button'



function Conunt({onlerIncreament,onDecreament,counter}) {
const [coun,setCoun]=useState(0)

  return (
    <div className='flex flex-col rounded-2xl px-16 py-4 h-auto items-center justify-center bg-white shadow mb-4'>
             <span className='text-center'>{counter}</span>
           <div className='flex gap-3 pt-4'>
               <Button handelr={onlerIncreament}>Increament</Button>
               <Button type="danger" handelr={onDecreament}>Decrement</Button>
           </div>
          
    </div>
  )
}

export default Conunt