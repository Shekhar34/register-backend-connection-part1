const mongoose = require('mongoose');

URI='mongodb://localhost:27017/my_database';


// Check connection MONGODB
const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection sucessful");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports=connectDb;
