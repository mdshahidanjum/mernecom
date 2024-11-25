const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE);

// const db = mongoose.connection;

// db.on('error',(err)=>{
//     console.log(err);
// })
// db.once('open',()=>{
//     console.log("db is connected sucssfully");
// })

// second method
const conDB=async ()=>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("database conncted successfull");
    }).catch((err)=>{
        console.log(err);
    })
}

const db = mongoose.connect(process.env.MONGO_URL);


module.exports=conDB;