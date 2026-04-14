import React, { useEffect, useState } from 'react'
import { assets, categoryData,comments_data } from '../assets/assets'
import { useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Moment from 'moment'
import { FaRegCircleUser } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import Footer from '../Components/Footer'
import Loader from '../Components/Loader'
 function Blog() {
  const [data, setData]=useState(null)
  const [comments, setComment]=useState([])
const [name,setName]=useState('')
const [content,setContent]=useState('')

  const {id}=useParams();

  const fetchBlogData= async ()=>{
  const data=categoryData.find(item=>item._id===id)
  setData(data)
  }
  const fetchCommentData=async ()=>{
    setComment(comments_data)
  }

const addComment=async (e)=>{
e.preventdefault();


}

  useEffect(()=>{
fetchBlogData()
fetchCommentData()
  },[])


  return  data ?(
  
    <div className='relative'>
      <img src={assets.gradiantBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
      <NavBar/>
    <div className='text-center mt-20 text-gray 600'>
      <p className='text-primary py-4 font-medium' >Published on{Moment(data.createdAt).format('MMMM Do YYYY')}</p>
      <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800' >{data.title}</h1>
      <h2 className='my-5 max-w-lg truncate mx-auto'  >{data.subtitle}</h2>
      <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary' >Michael Brown</p>
    </div>
 
  <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
<img src={data.image} alt="" className='rounded-3xl mb-5' />
<div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}}>

</div>
{/* comment section*/}

<div className=' mt-14 mb-10 max-w-3xl mx-auto'>
<p className='font-semibold mb-4'>Comments ({comments.length})</p>
<div className='flex flex-col gap-3'>
{
  comments.map((items,index)=>(
    <div key={index} className=' relative bg-primary/2  max-w-xl  border border-primary/5  rounded text-gray-600 p-4' >
<div className='flex gap-2 items-center mb-2'>
<FaRegCircleUser size={35} className='w-6'/>
<h2 className='font-medium' >{items.name}</h2>
</div>
<p className='text-sm max-w-md ml-8'>{items.content}</p>
   <div className='absolute right-4 bottom-3 items-center gap-2 text-xs'>
   <p className=''>{Moment(items.createdAt).fromNow()}</p>
   
   </div>

  
    </div>
  ))
}
</div>
</div>

{/* add comment section */}
<div className='justify-center max-w-3xl mx-auto'>
  <p className='font-semibold my-3'>Add your comment</p>
  <form onSubmit={addComment}  >
    <div>
    <input onChange={(e)=>setName(e.target.value)} className=' inline-block border border-primary/50 rounded-sm p-3 items-start w-lg  outline-none'  type="text" value={name} placeholder='Name' />
    </div>

   <div>
   <textarea onChange={(e)=>setContent(e.target.value)} className='border  border-primary/50 outline-none rounded-sm py-20 items-start w-lg my-4 pt-3 px-2' value={content} placeholder='Comment'></textarea>
   </div>
    <button className='bg-primary text-white rounded-lg py-2 px-5 cursor-pointer hover:scale-102 transition-all '>Submit</button>
  </form>

</div>
{/* share section  */}
<div className='max-w-3xl mx-auto m-8'>
  <p className='font-semibold py-3'>Share this article on social media</p>
  <div className='flex gap-3'>
  <FaFacebookF color='#5044e5' className='rounded-full border border-primary p-1 shadow  ' size={30} />
  <FaTwitter className='rounded-full border border-primary p-1 ' size={30} color='#5044e5'/>
  < FaGooglePlusG color='#5044e5' className='rounded-full border border-primary p-1 ' size={30} />
  </div> 
</div>
  </div>
<Footer/>

    </div>
 
):<Loader/>
}

export default Blog
