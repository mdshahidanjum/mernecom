import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {

  const [user, setUser]=useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const navigate = useNavigate()

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
      const res = await axios.post("https://mernchat-zbxa.onrender.com/api/v1/user/register",user,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })
      
      
      if(res.data.success){
        
        toast.success(res.data.message)
        navigate("/login")
      }
      
      

    }catch(err){
      // console.log(err)
      toast.error(err.response.data.message)
      

    }

  }


  return (
    <div className="min-w-96 mx-auto border shadow-md rounded-md bg-gray-100">
      <div className="p-4">
        <h1 className="font-bold text-center">Register</h1>
        <hr />
        <form action="">
          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" name="fullName" value={user.fullName} onChange={userTargetHandler}
              className="w-full input input-bordered h-10"
              
              placeholder="Full Name"
            />
          </div>

          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" name="userName" value={user.userName} onChange={userTargetHandler}
              className="w-full input input-bordered h-10"
              
              placeholder="Username"
            />
          </div>

          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="text" name="password" value={user.password} onChange={userTargetHandler}
              className="w-full input input-bordered h-10"
              
              placeholder="Password"
            />
          </div>

          <div className="mt-2">
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="text" name="confirmPassword" value={user.confirmPassword} onChange={userTargetHandler}
              className="w-full input input-bordered h-10"
              
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center gap-7 mt-3">
            <div className="flex items-center cursor-pointer">
             <label htmlFor="male" >
              <span className="label-text mx-2 cursor-pointer">Male</span> </label>
              
              <input id="male" type="radio" name="gender" value="male" onChange={userTargetHandler} className="radio radio-info" />
              
            </div>

            <div className="flex items-center cursor-pointer">
              <label htmlFor="female">
              <span className="label-text mx-2 cursor-pointer">Female</span> </label>
              <input id="female" type="radio" name="gender" value="female" onChange={userTargetHandler} className="radio radio-info" />
              
            </div>
          </div>

          <div className="mt-2">
           <span className="mx-1">already have an account?</span>
            <Link to="/login" className="text-blue-700"> Login </Link>
          </div>
          <div className="mt-2">
             <button onClick={(e)=>handleSubmit(e)} className="btn btn-block btn-sm btn-primary font-bold text-white hover:bg-slate-300 hover:text-black"  >Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
