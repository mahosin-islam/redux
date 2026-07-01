import { MoveLeft } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Banck() {
  const [fees, setFess] = useState(0)
  const [discounts, setDiscounts] = useState(0)
  const navigate= useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('Cash')
  console.log("paymet", paymentMethod)
  const discount = 0;
  const handleChange = (e, amount) => {
    if (e.target.checked) {
      setFess((prev) => prev + amount)

    }
    else {
      setFess((prev) => prev - amount)
    }
  }

  const paybableAmoutn = fees - discounts;
const handelpaymetSuccess=()=>{
  alert("paymetn successful")
}
const handelNavigate=()=>{
      navigate("/")
}

  return (
    <div className='min-h-screen overflow-y-auto '>
       <div className=' absolute  top-0  flex items-center  left-0 h-20 right-0 bg-white z-20'>
            <div className="flex ml-2 text-2xl font-semibold">
              
            <MoveLeft onClick={handelNavigate} size={25}  className='text-[#6E48AA] font-bold'/>
          
           <span className='ml-20'>Payment Details</span>
            </div>
       </div>

      <div className="m-10 mt-24 rounded-2xl  h-auto flex flex-col gap-2 shadow-lg">
        <div className="p-2 flex gap-2 justify-between flex-2 rounded-t-2xl bg-gradient-to-r from-[#6E48AA] to-[#1A83FF] ">
          {/* image section */}
          <div className="flex-1 itecms-center ">

            <div className='flex items-center my-auto'>
              <img className='h-33 rounded-2xl p-2 w-full' src="https://i.ibb.co.com/VYWsqrpS/beast.png/" alt="imag" />
            </div>
          </div>
          {/* text-cetion */}
          <div className="flex-2 flex items-center">
            <div><h3 className='text-2xl font-semibold text-white'>Md Mahosin</h3>
              <h4 className='text-lg text-white'>Id: 1234</h4>
              <h4 className='text-lg text-white'>Class: sever</h4></div>
          </div>
        </div>
        <div className="flex-1 flex justify-between p-3">
          <div>
            <p>All fees total</p>
            <h2 className='text-3xl font-bold text-red-400'>$1200</h2>
          </div>
          <div>
            <p>Due date</p>
            <h2 className='text-2xl font-bold '>31 May 2024</h2>
          </div>
        </div>

      </div>
      {/* fres-checkoutpage */}
      <div className="mt-2 mx-10 p-5 bg-white shadow-lg rounded-2xl  ">
        <h2 className='text-3xl font-semibold '>Fee Breakdown</h2>
        <div>
          <div className='flex justify-between'>
            <label className='flex justify-between my-2 gap-2'>
              <input type='checkbox'
                onChange={(e) => handleChange(e, 100)}
                className="w-5 h-5 accent-[#7E4A9E] rounded cursor-pointer"
              />
              <span>Tuition Fee</span>
            </label>
            <span>Amoutn</span>
          </div>
          <div className='flex justify-between'>
            <label className='flex justify-between my-2 gap-2'>
              <input type='checkbox'
                onChange={(e) => handleChange(e, 200)}
                className="w-5 h-5 accent-[#7E4A9E] rounded cursor-pointer"
              />
              <span>Exam Fee</span>
            </label>
            <span>200</span>
          </div>
          <div className='flex justify-between'>
            <label className='flex justify-between my-2 gap-2'>
              <input type='checkbox'
                onChange={(e) => handleChange(e, 300)}
                className="w-5 h-5 accent-[#7E4A9E] rounded cursor-pointer"
              />
              <span>Library Fee</span>
            </label>
            <span>300</span>
          </div>
          <div className='flex justify-between'>
            <label className='flex justify-between my-2 gap-2'>
              <input type='checkbox'
                onChange={(e) => handleChange(e, 400)}
                className="w-5 h-5 accent-[#7E4A9E] rounded cursor-pointer"
              />
              <span>Transport Fee</span>
            </label>
            <span>400</span>
          </div>
        </div>
        <div className='text-2xl  font-semibold flex justify-between px-2 pb-4'>
          <span>Selected Total</span>
          <span className="text-[#7E4A9E]">${fees}</span>
        </div>

        <div>
        </div>

      </div>


      {/* discout-amoutn */}

      <div className="mx-10 my-5 p-5 h-20 bg-white shadow-lg rounded-2xl  flex justify-between">
        <span>
          <h2>Discout Amoutn</h2>
        </span>
        <span>
          <input type="text"
            defaultValue={discounts}
            onChange={(e) => setDiscounts(e.target.value)}
            placeholder='Enter Discout Code' className='border-2 border-gray-300 rounded-lg p-2 w-full' />
        </span>
      </div>


      {/* paymetn summmary */}
      <div className="mx-10 my-2 p-5 min-h-40 bg-white shadow-lg rounded-2xl   ">
        <h2 className='text-2xl font-semibold'>Payment Summary</h2>
        <div className='py-2 flex justify-between'>
          <span>
            Select Fee
          </span>
          <span>${fees}</span>
        </div>
        <div className='flex justify-between'>
          <span>
            discoutn
          </span>
          <span>${discounts}</span>
        </div>

        <div className='py-2 flex justify-between'>
          <span className='text-2xl font-semibold'>Payable Amount</span>
          <span className='text-2xl font-semibold text-red-400'>${paybableAmoutn}</span>
        </div>
      </div>
      {/* paymetn-method */}

      <div className="mx-10 p-5 min-h-40 mb-3 bg-white shadow-lg rounded-2xl   ">
        <h2 className='text-2xl font-semibold'>Payment Method</h2>
        <div className="grid grid-cols-2 gap-2 pt-2">
          {["Cash", "Bank", "Card", "Nagad"].map((method) => {
            return <button key={method}
              onClick={() => setPaymentMethod(method)}
              className={`py-4 rounded-2xl  font-bold border text-sm transition-all ${paymentMethod === method
                  ? 'bg-[#7E4A9E] text-white border-[#7E4A9E]'
                  : 'bg-white text-slate-600 border-gray-200 hover:bg-slate-50'
                }`}
            >
              <span>  {method}</span>
            </button>
          })

          }


        </div>
        <div className='my-3 p-3 rounded-2xl w-full bg-blue-100'>

          <h3>Selected Paymetn Method</h3>
          <span className='text-2xl text-[#7E4A9E]  font-semibold'>{paymentMethod}</span>
        </div>
      </div>
         {/* pay-now */}

            <div className="mx-10 mb-5 p-5 min-h-40 bg-white shadow-lg rounded-2xl  ">

                <div className='flex justify-between'>
                  <span>TotalAmount</span>
                  <span>Paymet Method</span>

                </div>
                <div className='py-2 flex justify-between'>
                  <span className='text-2xl font-semibold'>${paybableAmoutn}</span>
                  <span className='text-[#7E4A9E] '>{paymentMethod}</span>

                </div>
                 <button  onClick={handelpaymetSuccess} className='bg-[#7E4A9E]  hover:bg-[#a256d2] py-5 text-2xl font-semibold w-full text-white rounded-2xl'>Paymet Now</button>
          </div>
        
    </div>
  )
}

export default Banck