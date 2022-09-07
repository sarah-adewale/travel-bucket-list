const mongoose = require('mongoose') //require mongoose

const connectDB = async() => { //connecting to mongo using async
    try{
        const conn = await mongoose.connect(process.env.DB_STRING) //connecting to mongo 

        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB