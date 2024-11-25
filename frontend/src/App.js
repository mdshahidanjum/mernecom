
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { setSocket } from './redux/slices/socketSlice';
import { setOnlineUsers } from './redux/slices/userSlice';
const router = createBrowserRouter([
  {
    path:"/", element:<Home />
  },
  {
    path:"/register", element: <Register />
  },
  {
    path:"/login", element:<Login />
  },
])

function App() {
  
  const {authUser} = useSelector(store=>store.user);
  const {socket} = useSelector(store=>store.socket);

  // console.log('auth user id check ',authUser._id)
  const dispatch = useDispatch()
  console.log(socket)
  useEffect(()=>{
    
    if(authUser){
      
      const socket = io('http://localhost:8000',{
        auth:{
          userId:authUser._id
        }

      });
      
      dispatch(setSocket(socket))

      socket.on('getOnlineUsers',(onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });
      return ()=>socket.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null))
      }
    }
  },[authUser])
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      
      <RouterProvider router={router} />
      <div>
        Developed by : Md Shahid
      </div>
      
      
      
    </div>
  );
}

export default App;
