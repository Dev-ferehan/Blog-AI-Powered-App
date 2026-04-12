import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate=useNavigate()
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
      <img src={assets.logo} onClick={()=>navigate('/')} className='w-32 sm:w-44' alt="logo" />
      <button className='flex  items-center gap-2 cursor-pointer rounded-full bg-primary text-white px-10 py-2.5' onClick={()=>navigate('/admin')} >Login 
      <FaArrowRight className='w-3' />
        </button>
    </div>
  )
}

export default NavBar
