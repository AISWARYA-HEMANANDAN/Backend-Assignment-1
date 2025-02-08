const express = require('express')
const app = express()
const userRoutes = require ('./routes/userRoutes')

app.use(express.json())
app.use("/user", userRoutes)

app.listen(4000,()=>{
    console.log('Server starts on port 4000');
    
})