import axios from 'axios';
import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../../redux/slices/massageSlice';

const SendInput = () => {
  const [message, setMessages]=useState("")
  const dispatch=useDispatch()
  const {selectedUser} = useSelector(store=>store.user)
  const {messages} = useSelector(store=>store.message)
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
      try{
        const res = await axios.post(`https://mernchat-zbxa.onrender.com/api/v1/message/send/${selectedUser?._id}`,{message},{
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials:true
        })
        // console.log(res)
        dispatch(setMessage([...messages, res?.data?.message]))

        setMessages("")

      }catch(err){
        console.log(err)
      }
  }
  return (
    <div className='px-4 my-3'>
        <form onSubmit={onSubmitHandler}>
            <div className='w-full relative'>
                <input type='text' value={message} onChange={(e)=>setMessages(e.target.value)}
                placeholder='send a message...' className='border text-sm rounded-lg block w-full bg-gray-700 text-white 
                border-zinc-600 p-3' />
                <button type='submit' className='absolute flex items-center inset-y-4 end-0 pr-4 text-xl text-green-600'>
                    <IoSendSharp />

                </button>
            </div>
        </form>
    </div>
  )
}

export default SendInput
