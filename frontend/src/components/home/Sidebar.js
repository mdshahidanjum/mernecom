import React, { useState } from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import OtherUsers from './OtherUsers'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, setOtherUsers } from '../../redux/slices/userSlice'
const Sidebar = () => {
  const [search, setSearch]=useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {otherUsers} = useSelector(store=>store.user)

  const sumbmitHandler = async(e)=>{
    e.preventDefault()
    // alert(search)
    const converUser = await otherUsers.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()));
    if(converUser){
      dispatch(setOtherUsers([converUser]))
    }else{
      toast.error("user not found")
    }
    setSearch("")
  }
  
  const logoutHandler =async()=>{
    try{
      // axios.defaults.withCredentials=true    //not required because auth middleware not passes
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/api/v1/user/logout`)
     console.log(res)
     navigate('/login')
     toast.success(res.data.message)
     dispatch(setAuthUser(null))
    }catch(err){

    }
  }
  return (
    <div>
      <form onSubmit={sumbmitHandler} action='' className='flex items-center gap-2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='input input-bordered rounded-md' type='text' 
        placeholder='Search....' />
       
        <button type='submit' className='btn bg-gray-50 '>
          <BiSearchAlt2 className='w-6 h-6 outline-none' />
        </button>
      </form>
      <div className="divider"></div>
      
         <OtherUsers />
      
      
      <div className='mt-2'>
        <button onClick={logoutHandler} className='btn btn-sm'>Logout</button>
      </div>
      
      
    </div>
  )
}

export default Sidebar