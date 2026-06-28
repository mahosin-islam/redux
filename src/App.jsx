
import { useState } from 'react'
import './App.css'

import TotalCout from './Components/Totalcount'
import Conunt from './Components/Conunt'

function App() {
  const inisialCouters = [
    {
      id: 1,
      value: 0
    },
    {
      id: 2,
      value: 0
    }, 
  
  ]

  const [counters, setCounters] = useState(inisialCouters)

const sumTotal = counters.reduce((sum,currnet)=>
   sum + currnet.value,0)


  const handlerIncreament = (counterId) => {
  
 
    const updateCouts =  counters.map(counter=>{
             if(counter.id == counterId){
                 return{
                   ...counter,
                   value: counter.value + 1
                 }
             }
             return counter
     })
 setCounters(updateCouts)
  }
  const handerDecreament = (counterId) => {
     
       const updateCouts = counters.map(counter=>{
         
             if(counter.id == counterId){
                 return{
                   ...counter,
                   value: counter.value - 1
                 }
             }
             return counter
     })
     setCounters(updateCouts)
  }


  return (
    <div className='mt-20 flex justify-center items-center'>

      <div>
        <h2 className='text-2xl font-semibold pb-8 text-center'>Simple coutn applicaiton </h2>
         
         {counters.map(coun=><Conunt key={coun.id} 
         counter={coun.value}        
          onlerIncreament={()=>handlerIncreament (coun.id)}
          onDecreament={()=>handerDecreament(coun.id)} />)}

        <TotalCout coutn={sumTotal} />
      </div>
    </div>
  )
}

export default App
