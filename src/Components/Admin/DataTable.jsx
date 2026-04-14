import React from 'react'
import { RxCross2 } from "react-icons/rx";
function DataTable({blog,fetchBlogs,index}) {
    const {title,createdAt}=blog;
    const BlogData=new Date(createdAt)
console.log(fetchBlogs)
  return (
  <tr className='border-y border-gray-300'>
    <th className='px-2 py-4'>{index}</th>
    <td className='px-2 py-4'>{ title}</td>
    <td className='px-2 py-4 max-sm:hidden' >{BlogData.toDateString()}</td>
    <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${blog.isPublished?"text-green-600 ":"text-orange-700"}`} >{blog.isPublished?'Published': 'unPublished'}</p>
    </td>
    <td className='px-2 py-4 flex text-sm justify-between'>
        <button className='border text-sm px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished?'unPublish':'Publish'}            
        </button>
    <RxCross2 className='w-8 hover:scale-110 transition-all cursor-pointer '/>
    </td>
  </tr>
  )
}

export default DataTable
