import { Download,Share2 } from 'lucide-react'
import React from 'react'

function MFS() {
  return (
    <div className='text-[#6E48AA] text-left'>
      <h2 className='text-center text-3xl font-bold py-2 text-[#6E48AA]'>Transaction Successful</h2>
      <div className='mt-4 mx-10 p-5 bg-white shadow-2xl rounded-2xl  min-h-100'>
        <div className='flex justify-between'>
          <span>Form Accoutn</span>
          <span>DHRUBO JYOTI DAS
            <br />
            1053445970002</span>
        </div>
        <div className='py-2 flex justify-between'>
          <span>To Account</span>
          <span>My NrB Savings
            <br />
            1021020115909</span>
        </div>
        <div className='flex justify-between'>
          <span> Accoutn</span>
          <span>
            BDT <br />

            17,500.00
          </span>
        </div>
        <div className='py-2 flex justify-between'>
          <span>Chnnel</span>
          <span>
            NPSB
          </span>
        </div>
        <div className=' flex justify-between'>
          <span>Transaction Date</span>
          <span>
            03-Apr-2023

            <br />08:21:53 PM
          </span>
        </div>
        <div className='py-2 flex justify-between'>
          <span>Reference Number</span>
          <span>
            S4232549</span>
        </div>
        <div className=' flex justify-between'>
          <span>Form Accoutn</span>
          <span>DHRUBO JYOTI DAS
            <br />
            1053445970002</span>
        </div>

      </div>
       <div className='flex justify-center gap-10 items-center mt-5'>
          <div className='flex gap-2'>
             <button className='bg-[#7E4A9E] items-center hover:bg-[#a256d2] py-3 text-2xl font-semibold flex border-2 rounded-2xl px-6 text-white '>
            <Download/>
             <span>Dowload</span></button>
          <button className='bg-[#7E4A9E]  hover:bg-[#a256d2] py-3 text-2xl font-semibold border-2 rounded-2xl items-center px-6 text-white flex'>
            <span> shared </span><Share2/>
          </button>
        
          </div>
        
       </div>
    </div>
  )
}

export default MFS