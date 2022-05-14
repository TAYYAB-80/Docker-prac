const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.json("Hello Inside Docker!")
})
app.get('/home',(req,res)=>{
    res.json("Welcome! To Home")
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server is Active At PORT ${PORT}`)
})