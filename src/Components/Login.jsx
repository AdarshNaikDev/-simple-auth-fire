import React from 'react'
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          <div  className=' hidden sm:block'>
            <img className='w-full h-screen object-cover' src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
          </div>

          <div className='bg-gray-100 flex flex-col justify-center '>
            <form className='drop-shadow-md hover:drop-shadow-2xl max-w-[400px] mx-auto w-full bg-white p-4'>
              <h3 className='text-4xl font-bold text-center py-6 '>Simple Authentication</h3>
              <div className='flex flex-col py-2'>
                <label>Username</label>
                <input className=' border outline-sky-300 p-2' type = "text" />
              </div>

              <div className='flex flex-col py-2'>
                <label>Password</label>
                <input className=' outline-sky-300 border p-2' type = "password" />
              </div>
              <button className='border w-full my-2 py-2 bg-indigo-700 text-white hover:bg-indigo-500'> Sign In</button>
              <div >
                <nav>
                <p>
                  Didn't have an account? <button className=' text-sky-400 hover:text-blue-500'> <NavLink to= "/login2">Sign up here</NavLink> </button>
                </p>
                </nav>
              </div>
            </form>

          </div>

          
      </div>
    </>
  )
}

export default Login