import React from 'react'
import Sidebar from '../components/home/Sidebar'
import MessageContainer from '../components/home/MessageContainer'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const login = ()=>{
    navigate('/login')

  }
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg bg-gray-200'>
      <Sidebar />
      <MessageContainer />
      <div>
        <button className="btn btn-primary text-white font-bold cursor-pointer" onClick={login}>Login</button>
      </div>
         
    </div>
    
  )
}

export default Home