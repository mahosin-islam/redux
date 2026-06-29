
import { useState } from 'react'
import './App.css'

import TotalCout from './Components/Totalcount'
import Conunt from './Components/Conunt'

function App() {


  return (
    <div className='mt-20 flex justify-center items-center'>

      <div>
        <h2 className='text-2xl font-semibold pb-8 text-center'>Simple coutn applicaiton </h2>

        <Conunt/>
        <TotalCout  />
      </div>
    </div>
  )
}

export default App
