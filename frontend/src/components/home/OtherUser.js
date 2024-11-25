import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setSelectedUser} from '../../redux/slices/userSlice'

const OtherUser = (props) => {
    const user = props.user;
    const dispatch = useDispatch()
    const {selectedUser, onlineUsers} = useSelector(store=>store.user)
    const isOnline = onlineUsers.includes(user._id)
    // console.log('is online user: ',isOnline)
    const selecterdUserH=(user)=>{
        dispatch(setSelectedUser(user))
        // console.log(user)
    }
    console.log(selectedUser)

    console.log(user)
  return (
    <div className=''>
        <div onClick={()=>selecterdUserH(user)} className={` ${selectedUser?._id === user?._id? 'bg-gray-50' : ''} flex gap-2 items-center hover:bg-gray-50 rounded-md p-2 cursor-pointer`}>
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className='w-12 rounded-full'>
                        <img src={user.profilePhoto} alt='user-profile'/>
                    </div>

                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-between gap-2'>
                        <p>{user?.fullName}</p>
                    </div>
                </div>
                
            </div>
            <div className='divider my-0  h-1' ></div>
    </div>
  )
}

export default OtherUser