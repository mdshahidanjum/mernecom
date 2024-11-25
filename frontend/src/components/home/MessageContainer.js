import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../../redux/slices/userSlice'

const MessageContainer = () => {
    const {selectedUser,authUser} = useSelector(store=>store.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        return ()=>dispatch(setSelectedUser(null))
    },[])

  return (
 <>
   {
    selectedUser !==null ? (
        <div className='md:min-w-[550px] flex flex-col'>
        <div className='flex gap-2 items-center bg-slate-700 text-white px-4 py-2 mb-2 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src={selectedUser?.profilePhoto} alt='user Profile' />
                    </div>

                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between gap-2 '>
                        <p>{selectedUser?.fullName}</p>
                    </div>
                </div>
                
            </div>
            <Messages />
            <SendInput />
    </div>
    ):(
      <div className='m-4 md-min-w[550px] flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-black font-bold'>Hi, {authUser?.fullName}</h1>
        <h1 className='text-xl text-gray-700'>Let's Start convertation </h1>
      </div>  
    )
   }
    
</>
  )
}

export default MessageContainer