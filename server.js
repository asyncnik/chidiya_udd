const express = require("express")
const path = require("path")
const http = require('http')

const app = express()

const PORT = 3000 || process.env.PORT 

//Set a static folder 
app.use(express.static(path.join(__dirname, 'public')))


server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
