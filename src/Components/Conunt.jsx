import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/counters/counterSlice';



function Conunt() {
const dispatch=useDispatch();

  return (
    <div className='flex flex-col rounded-2xl px-16 py-4 h-auto items-center justify-center bg-white shadow mb-4'>
           
           <div className='flex gap-3 pt-4'>
               <Button  handelr={()=>{dispatch(increment())}}>Inecrement</Button>
             
               <Button type="danger"  handelr={()=>{dispatch(decrement())}}>Descreament</Button>
               
               <Button handelr={()=>{dispatch(reset())}}>reset</Button>
           </div>
          
    </div>
  )
}

export default Conunt