import React from 'react'
import key from '../assets/keyyyynew.png'
import puzzlepiece from '../assets/puzz.png'
import chain from '../assets/chain.png'
import clouds from "../assets/cloud.png"
import dollar from '../assets/dollarnew.png'
import people from '../assets/ppl.png'
import {MdOutlineArrowRightAlt} from 'react-icons/md'

const Information = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        <div className='m-24 flex'>
            <div>
<img className='w-20 mx-4' src={chain} alt="" />
            </div>
            <div>
        
            <h1 className='text-black mx-2  font-bold text-2xl '>Using Abstract</h1>
        <p className='text-black text-xl mx-2  my-4'>Abstract lets you manage, version,
             and <br/> document your designs in one place.</p>
             <button className='text-blue-800 mx-2  text-xl flex flex-row'>Learn More <span className='mx-1 my-1'><MdOutlineArrowRightAlt/></span></button>
            </div>
       

    </div>

    <div className='m-24 flex'>
        <div>
         <img className='w-20 mx-4' src={people} alt="" />
        </div>
        <div>
        <h1 className='text-black mx-2  font-bold text-2xl'>Manage your account</h1> 
       <p className='text-black  mx-2 text-xl my-4'>Configure your account settings, 
        such <br/>  as your email, profile details, and  <br/> password.</p>
        <button className='text-blue-800 mx-2  text-xl flex flex-row'>Learn More <span className='mx-1 my-1'><MdOutlineArrowRightAlt/></span></button>
        </div>
       
    </div>
 
    <div className='m-24 flex'>
        <div>
            <img className='w-20 mx-4' src={puzzlepiece} alt="" />
        </div>
        <div>
        <h1  className='text-black mx-2  font-bold text-2xl' >Manage organizations, teams, and< br/> projects</h1>
        < p className='text-black mx-2  text-xl my-4'>Use Abstract organizations,
          teams, and <br/> projects to organize your people and <br/> your work.</p>
          <button className='text-blue-800 mx-2  text-xl flex flex-row'>Learn More <span className='mx-1 my-1'><MdOutlineArrowRightAlt/></span></button>
          </div>

    </div>

    <div className='m-24 flex'>
        <div>
        <img className='w-20 mx-4' src={dollar} alt="" />
        </div>
        <div>
        <h1  className='text-black mx-2  font-bold text-2xl my-4'>Manage billing</h1>
    <p className='text-black mx-2  text-xl'>Change subscriptions and payment <br/> details.</p>
    <button className='text-blue mx-2 -800 text-xl flex flex-row'>Learn More <span className='mx-1 my-1'><MdOutlineArrowRightAlt/></span></button>
        </div>
   
    </div>

    <div className='m-24 flex'>
        <div>
        <img className='w-20 mx-4' src={key} alt="" />
        </div>
        <div>
        <h1  className='text-black font-bold mx-2 text-2xl'>Authenticate to Abstract</h1>
<p className='text-black text-xl mx-2 my-4'>Set up and configure SSO, SCIM, and <br/> Just-in-Time provisioning.</p>
<button className='text-blue-800 text-xl mx-2 flex flex-row'>Learn More <span className='mx-1 my-1'><MdOutlineArrowRightAlt/></span></button>
        </div>
       
    </div>

    <div className='m-24 flex'>
        <div>
            <img className='w-20 mx-4' src={clouds} alt="" />
        </div>
        <div>
        <h1  className='text-black mx-2 font-bold text-2xl'>Abstract support</h1>
<p className='text-black text-xl mx-2 my-4'>Get in touch with a human.</p>
<button className='text-blue-800 text-xl mx-2 flex flex-row'>Learn More <span className='mx-1 my-1'><MdOutlineArrowRightAlt/></span></button>
        </div>

    </div>
        </div>
      
  )
}

export default Information
