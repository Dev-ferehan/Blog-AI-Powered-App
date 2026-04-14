import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center  h-screen'>
      <div className='animate-spin rounded-full h-10 w-10 border-4 border-l-white border-gray-700'></div>
    </div>
  )
}

export default Loader
