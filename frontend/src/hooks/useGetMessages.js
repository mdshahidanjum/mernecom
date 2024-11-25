
import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/slices/massageSlice'

const useGetMessages = () => {
    const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.user)
  

    useEffect(()=>{
        const fetchMessages=async()=>{
            try{
               axios.defaults.withCredentials=true;
               const res = await axios.get(`https://mernchat-zbxa.onrender.com/api/v1/message/${selectedUser?._id}`)
               dispatch(setMessage(res.data))
            //    console.log("massages da", res)
            }catch(err){
                console.log(err)
            }
        }
        fetchMessages()
    },[selectedUser]);
  
}

export default useGetMessages
