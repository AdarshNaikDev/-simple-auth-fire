import { async } from '@firebase/util';
import React, {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import {auth} from "../firebase"
import {FcGoogle} from 'react-icons/fc'




function Login2() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email : "",
        password: ""
    })

    const loginUser = async() => {
        console.log(login)
        signInWithEmailAndPassword(auth, login.email, login.password).then((res)=>{
            console.log(res)
            navigate("/home")

        }).catch(err => console.log(err))

        
    }

    const signInWithGoogle = () =>{

      const provider = new GoogleAuthProvider();
      signInWithPopup(auth,provider).then(
        (res) => {
          console.log(res.user.accessToken)
          const authtoken = res.user.accessToken
          if(authtoken != null || authtoken != "")
          {
            navigate("/home")
          }
          else
          {
            alert("Something went wrong")
          }
        }).catch((err)=> console.log(err))
    }
  return (
    <>
        <div className=' w-full h-screen relative bg-zinc-900/50'>
            <img  className='w-full h-screen  object-cover mix-blend-overlay absolute' src='https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'/>
            
            <div className='flex justify-center items-center h-full'>
            <div className='rounded-xl drop-shadow-md hover:drop-shadow-2xl max-w-[400px] mx-auto w-full bg-white p-4'>
              <h3 className='text-4xl font-bold text-center py-6 '>Simple Authentication</h3>
              <div className='flex flex-col py-2'>
                <label>Email</label>
                <input  onChange={(event)=>
                setLogin((prev) =>({...prev, email:event.target.value}))
                }className=' border border-black outline-sky-300 p-2' type = "text" />
              </div>

              <div className='flex flex-col py-2'>
                <label>Password</label>
                <input onChange={(event) => setLogin((prev) => ({...prev, password:event.target.value}))} className=' outline-sky-300 border border-black p-2' type = "password" />
              </div>

              {/* <div className='py-8'>
              <input className=' outline-none' placeholder='Username' type="text "/>
                <hr className='py-[0.5px]  bg-black'/>
                
              </div> */}
              <button onClick={loginUser}  className='border w-full my-2 py-2 bg-indigo-700 text-white hover:bg-indigo-500'> Sign In</button>

              <p className='text-sm text-center text-gray-500'>--------------OR--------------</p>

              <button onClick={signInWithGoogle} className=' border w-full my-2 py-2 bg-indigo-700 text-white hover:bg-indigo-500'> Sign In with Google </button> 
              <div >
                <nav>
                <p>
                  Didn't have an account? <button className=' text-sky-400 hover:text-blue-500'> <NavLink to="/signup">Sign up here </NavLink>  </button>
                </p>
                </nav>
              </div>
            </div>

            </div>
           
        </div>

        
    </>
  )
}

export default Login2