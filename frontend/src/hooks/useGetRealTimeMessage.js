import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/slices/massageSlice';

const useGetRealTimeMessage = () => {
    const {socket} = useSelector((store)=>store.socket);
    const {messages} = useSelector(store=>store.message);
    console.log(messages)
    const dispatch = useDispatch()
  useEffect(()=>{
   socket?.on("newMessage", (newMessage)=>{
    dispatch(setMessage([...messages, newMessage]))
   })
  },[socket,setMessage,messages])
}

export default useGetRealTimeMessage