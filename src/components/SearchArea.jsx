import React from 'react'

const SearchArea = () => {
  return (
    <div className='h-96 bg-violet-100 text-black '>
      <div className='flex flex-col justify-center items-center'>
      <h1 className=' text-6xl font-semibold my-16'>How can we help?</h1>
      <input className='px-64 py-4  border-2 sm:px-40  selection:border-blue-500 border-black hover:border-blue-600  ' placeholder='Search Here'  type="text" />
      </div>
       
      
    </div>
  )
}

export default SearchArea
