import React from 'react'

function Home() {
  return (
    <div className='relative'>
        <div className=' absolute w-full h-[446px] '>
            <h1 className='text-5xl font-bold   text-center mt-72 '>Welcome to Home Screen </h1> 
        </div>
        <img  className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        {/* <h1 className='text-5xl  absolute items-center'>Welcome to Home Screen </h1> */}
        
    </div>
  )
}

export default Home