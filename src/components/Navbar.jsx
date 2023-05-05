import React from 'react'
import logo from '../assets/logonew.svg'
import { FaBars,FaSearch } from "react-icons/fa" 

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  w-full h-20
    text-white  bg-black px-4'>
      <div className='flex'>
        <img className='w-8 bg-white' src={logo} alt="" />
       <h1 className='font-semibold text-2xl mx-2'>Abstract</h1> 
       <h1 className='text-3xl font-light'>|</h1>
    <h1 className='text-2xl mx-1 '>Help Center</h1>
      </div>

      <div>
      <button className='py-3 mx-2 px-2 bg-slate-900 rounded-md border-2  '>Submit a Request</button>
      <button className='bg-blue-600 px-10 py-3 rounded-md font-medium hover:bg-white hover:text-black'>Sign in</button>
      </div>
      <div className='mx-4 hidden '>
      <div className='mx-2 hidden'>
<FaBars/>
      </div>
      <div className='hidden'>
        <FaSearch/>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar
