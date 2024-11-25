const {Server} = require('socket.io');
const http = require('http');
const express = require('express');



const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:['https://chat-client-yy8m.onrender.com'],
        methods:['GET', 'POST'],
    },
});

const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId];
}
const userSocketMap ={};  //{userId->socketId}


io.on('connection', (socket)=>{
    console.log("io connected", socket.id);
    const userId = socket.handshake.auth.userId;
    // console.log('clienat user', userId)
    // console.log('clienat user', socket)

    if(userId  !== undefined){
        userSocketMap[userId]=socket.id;
        // console.log('user id pre',socket.id)
    }
   io.emit('getOnlineUsers',Object.keys(userSocketMap));
    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id);
        delete userSocketMap[userId];
   io.emit('getOnlineUsers',Object.keys(userSocketMap));

    })
    
    } )

// export {app, io, server}
module.exports = {
    app,
    io,
    server,
    getReceiverSocketId
  };
