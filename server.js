const express = require("express")
const path = require("path")
const http = require('http')

const app = express()

const server = http.createServer(app)

const PORT = 3000 || process.env.PORT 

//Set a static folder 
app.use(express.static(path.join(__dirname, 'data')))


server.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
