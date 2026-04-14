import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../Components/Admin/SideBar'
function Layout() {
    const navigate=useNavigate()
    const logout=()=>{
        navigate('/')
    }
  return (
 <>
    <div className='flex justify-between items-center m-3 py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
      <img className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigate('/')} src={assets.logo} alt="" />
      <button className='rounded-full bg-primary  text-sm px-8 py-2 cursor-pointer text-white' onClick={()=>logout} >Logout</button>
    </div>
    <div className=' flex h-[calc(100vh-70px)] '>
        <SideBar/>
        <Outlet/>
    </div>
 </>
  )
}

export default Layout
