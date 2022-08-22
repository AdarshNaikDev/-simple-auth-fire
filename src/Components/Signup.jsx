import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile, reauthenticateWithCredential } from "firebase/auth"
import {auth} from "../firebase"
import {useNavigate } from "react-router-dom"


function Signup() {
    const navigate = useNavigate();
    const [userInput, setuserInput] = useState({
        fname : "",
        email : "",
        password : ""
    })
    
    const handleSubmission = () => {
        if(!userInput.fname || !userInput.email || !userInput.password){
            alert("Please fill all the fields")
            
        }
        else
        {
            createUserWithEmailAndPassword(auth, userInput.email,userInput.password).then(async(res)=>{
                console.log(res)
                const user = res.user
                await updateProfile(user, {displayName: userInput.fname})
                alert( `Thanks ${userInput.fname} for signing up with us`)
                navigate("/")
            }).catch(err=> {
                alert(err.message)
                console.log(err)})
            
            
            
      
        }

        
    }

  return (
    <>
        <div className=' w-full h-screen relative bg-zinc-900/50'>
            <img  className='w-full h-screen  object-cover mix-blend-overlay absolute' src='https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'/>
            
            <div className='flex justify-center items-center h-full'>
            <div className='rounded-xl drop-shadow-md hover:drop-shadow-2xl max-w-[400px] mx-auto w-full bg-white p-4'>
              <h3 className='text-4xl font-bold text-center py-6 '>Simple Authentication</h3>
              <div className='flex flex-col py-2'>
                <label>Full Name</label>
                <input onChange={(event)=>
                setuserInput((prev) =>({...prev, fname:event.target.value}))
                } className=' border border-black outline-sky-300 p-2'  type = "text" />
              </div>
              <div className='flex flex-col py-2'>
                <label>Email</label>
                <input onChange={(event)=>
                setuserInput((prev)=> ({...prev, email:event.target.value}))
                } className=' border border-black outline-sky-300 p-2' type = "text" />
              </div>

              <div className='flex flex-col py-2'>
                <label>Password</label>
                <input className=' outline-sky-300 border border-black p-2'  type = "password" 
                onChange={(event)=>
                setuserInput((prev)=> ({...prev, password:event.target.value}))
                }
                
                />
              </div>

              {/* <div className='py-8'>
              <input className=' outline-none' placeholder='Username' type="text "/>
                <hr className='py-[0.5px]  bg-black'/>
                
              </div> */}
              <button onClick={handleSubmission} className='border w-full my-2 py-2 bg-indigo-700 text-white hover:bg-indigo-500'> Sign Up</button>
              <div >
                <nav>
                <p>
                  Didn't have an account? <button className=' text-sky-400 hover:text-blue-500'> Sign up here </button>
                </p>
                </nav>
              </div>
            </div>

            </div>
           
        </div>

        
    </>
  )
}

export default Signup