const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.json("Hello Inside Docker!")
})
const PORT=process.env.PORT||3000
app.listen(PORT,()=>{
    console.log(`Server is Active At PORT ${PORT}`)
})