import express from "express"
import dotenv from 'dotenv'
const app=express();

dotenv.config();

const PORT=process.env.port || 4000

app.get("/",(req,res)=>{
    res.send("helrfvlo")
})
app.listen(PORT,()=>{
    console.log(`Server listen on port ${PORT}`);
});