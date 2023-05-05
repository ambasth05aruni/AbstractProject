import React from 'react'
import logo from '../assets/logonew.svg'
const EndWrap = () => {
  return (
    <div className='bg-black h-96   text-white flex flex-row'>
      <div className='my-11 mx-24 '>
        <h1 className='text-2xl font-bold flex flex-col'>Abstract</h1>
        <ul>
          <a  className='hover:underline' href="https://app.abstract.com/signup?branches=true">Start Trial</a><br/>
          <a  className='hover:underline' href="https://www.abstract.com/pricing">Pricing</a><br/>
          <a  className='hover:underline' href="https://app.abstract.com/download">Download</a>
          
        </ul>
      </div>

      <div className='my-11 mx-24'>
        <h1 className='text-2xl font-bold'>Resources</h1>
        <ul>
        <a  className='hover:underline' href="https://www.abstract.com/blog">Blog</a><br/>
        <a  className='hover:underline' href="https://help.abstract.com/hc/en-us">Help Center</a><br/>
        <a  className='hover:underline' href="https://www.abstract.com/release-notes">Release Notes</a><br/>
        <a  className='hover:underline' href="https://status.goabstract.com/">Status</a>
          
        </ul>
      </div>
      
      <div className='my-11 mx-24'>
        <h1 className='text-2xl font-bold'>Community</h1>
        <ul>
        <a  className='hover:underline' href="https://twitter.com/goabstract">Twitter</a><br/>
        <a  className='hover:underline' href="https://www.linkedin.com/company/17950473/">LinkedIn</a><br/>
        <a  className='hover:underline' href="https://www.facebook.com/Abstract/">Facebook</a><br/>
        <a  className='hover:underline' href="https://dribbble.com/abstract">Dribble</a><br/>
        <a  className='hover:underline' href="https://dribbble.com/podcast">Podcast</a><br/>

        </ul>
      </div>
      
      <div className='my-11 mx-24'>
        <h1 className='text-2xl font-bold'>Company</h1>
        <ul>
        <a  className='hover:underline' href="https://www.abstract.com/about">About Us</a><br/>
        <a  className='hover:underline' href="https://abstract.breezy.hr/">Careers</a><br/>
        <a  className='hover:underline' href="https://www.abstract.com/legal">Legal</a><br/>

          <li className='hover:underline'>About Us</li>
          <li className='hover:underline'>Careers</li>
          <li className='hover:underline'>Legal</li>
        </ul>
        <div className='my-10 mx'>
<h1 className=' font-semibold'>Contact Us</h1>
<ul>
  <li className='hover:underline'>info@abstract.com</li>
</ul>
      </div>
      </div>
      <div className='my-64'>
        <img className='w-8 bg-white my-2' src={logo} alt="" />
        <h1 className='text-lg'>© Copyright 2023</h1>
        <h1 className='text-lg'>Abstract Studio Design, Inc.</h1>
        <h1 className='text-lg'>All rights reserved</h1>
      </div>

    </div>
  )
}

export default EndWrap
