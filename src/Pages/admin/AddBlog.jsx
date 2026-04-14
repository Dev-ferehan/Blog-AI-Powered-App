import React, { useState } from 'react'
import { assets } from '../../assets/assets';

function AddBlog() {
  const [image,setImage]=useState(false)
  const [title,setTitle]=useState('')
  const [subtitle,setSubtitle]=useState('')
  const [category,setCategory]=useState('StartUp')
  const [isPublished,setIsPublished]=useState(false)

  const submithandler= async (e)=>{
e.preventDefault();
  }
  return (
  <form onSubmit={submithandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
    <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
      <p>Upload thumbnail</p>
      <label htmlFor="image">
        <img  src={!image ? assets.uploadimg :URL.createObjectURL(image)} className='mt-2 h-16 rounded cursor-pointer' alt="" />
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required/>
      </label>

   
      <p className='mt-4'> Blog title</p>
      <input className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded ' onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Type here' required/>

      <p className='mt-4'> Sub title</p>
      <input className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded ' onChange={(e)=>setSubtitle(e.target.value)} value={subtitle} type="text" placeholder='Type here' required/>
     

     <p>Blog</p>
    </div>
  </form>
  )
}

export default AddBlog
