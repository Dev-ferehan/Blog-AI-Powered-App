import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { assets } from "../assets/assets";
function Header() {
  return (
    <div className='  mx-8 sm:mx16 xl:mx-24 relative' >
      <div className="text-center" >
        <div className="  items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 text-sm text-primary inline-flex bg-primary/10 rounded-full">
          <p className="">New: AI feature integrated </p>
          <MdOutlineStarPurple500 className="w-2.5" />
        </div>

<h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700" >Your own <span className="text-primary" >blogging</span> <br /> platform.</h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500" >This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>

        <form action="" className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden ">
            <input className=" pl-4 outline-none" type="text"  placeholder="Search for blogs"/>
            <button className="bg-primary text-white px-8 py2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer" type="submit">Search</button>
        </form>
      </div>
      <img src={assets.gradiantBackground} className="absolute -top-50 -z-1 opacity-50" alt="" />
    </div>
  );
}

export default Header;
