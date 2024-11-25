import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/slices/userSlice";


const Login = () => {

  const [user, setUser]=useState({
    
    userName:"",
    password:""
    
  })
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const userTargetHandler=(e)=>{
     
     const {name, value}=e.target;

     setUser((prev)=>{
      return {
        ...prev,
        [name]:value
      }
     })

  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("https://mernchat-zbxa.onrender.com/api/v1/user/login",user,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })
      
      
      
        
        toast.success(res.data.message)
        navigate("/")
        console.log(res.data)
        dispatch(setAuthUser(res.data));
      
      

    }catch(err){
      
      toast.error(err.response.data.message)
      

    }

  }

  console.log(user)
  return (
    <div className="min-w-96 mx-auto border shadow-md rounded-md bg-gray-100">
      <div className="p-4">
        <h1 className="font-bold text-center">Login</h1>
        <hr />
        <form action="">
          

          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input value={user.userName} name="userName" onChange={userTargetHandler}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input value={user.password} name="password" onChange={userTargetHandler}
              className="w-full input input-bordered h-10"
              type="text"
              placeholder="Password"
            />
          </div>

          

          <div className="mt-2">
           <span className="mx-1">don't have an account?</span>
            <Link to="/register" className="text-blue-700"> Register </Link>
          </div>
          <div className="mt-2">
             <button onClick={(e)=>handleSubmit(e)} className="btn btn-block btn-sm btn-primary font-bold text-white hover:bg-slate-300 hover:text-black"  >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
