const path = require('path') //path is a core nodejs module
const express = require('express')
const app = express()
const dotenv = require('dotenv')
//const mongoose = require('mongoose')
// const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo') //(session) session is now depracated
// const flash = require('express-flash')
// const logger = require('morgan')
const connectDB = require('./config/database') //gets the database in the config folder
// const mainRoutes = require('./routes/main')
// const todoRoutes = require('./routes/todos')


//load config file
dotenv.config({ path: './config/.env' })

connectDB() //calls the database

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(logger('dev'))


// Sessions
app.use(session({
        secret: 'keyboard cat',
        resave: false, //we dont want save a session if nothing is modified 
        saveUninitialized: false, //dont create a session until something is stored 
        store: MongoStore.create({
            mongoUrl: process.env.DB_STRING
        })
    })
)

//routes
// app.use('/', mainRoutes)



app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})