import axios from 'axios'
import React, {useEffect} from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/slices/userSlice'

const GetOtherUsers = () => {
  const dispatch = useDispatch()
    

    useEffect(()=>{
        const fetchOtherUsers = async()=>{
            try{
                axios.defaults.withCredentials=true
                const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/api/v1/user`);
                  // console.log(res)
                  dispatch(setOtherUsers(res.data))
                 
            }catch(err){
               console.log(err)
            }

        }
        fetchOtherUsers();
    },[])
  
}

export default GetOtherUsers