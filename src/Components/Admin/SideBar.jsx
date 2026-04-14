import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
function SideBar() {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6' >
      <NavLink end={true} to='/admin' className={({isActive})=>`flex items-center max-w-25 md:px-9 md:min-w-64 gap-3 px-3 py-3.5 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
     <FaHome size={25} className='min-w-4 w-5'/>
     <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>
      <NavLink to='/admin/addblog' className={({isActive})=>`flex items-center max-w-25 md:px-9 md:min-w-64 gap-3 px-3  py-3.5 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"}  `} >
      <MdAddComment size={20 } className='min-w-4 w-5'/>
      <p className='hidden md:inline-block'>Add Blogs</p>
      </NavLink>

      <NavLink to='/admin/listblog' className={({isActive})=>`flex items-center max-w-25 md:px-9 md:min-w-64 gap-3 px-3  py-3.5 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary "}`}>
        <IoMdListBox size={23} className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Blog List</p>
      </NavLink>
      <NavLink to='/admin/comment' className={({isActive})=>`flex items-center max-w-25 md:px-9 md:min-w-64 gap-3 px-3  py-3.5 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary "}`}>
        <MdOutlineInsertComment size={23} className='min-w-4 w-5'/>
        <p className='hidden md:inline-block'>Comments</p>
      </NavLink>
    </div>
  )
}

export default SideBar
