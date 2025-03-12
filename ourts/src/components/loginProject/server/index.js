import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import { EmployeeModel } from './models/employee.js'

const app  = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/myemployee");
app.post('/register',(req,res)=>{
EmployeeModel.create(req.body).then(myemployees =>res.json(myemployees)).catch(err=>req.json(err))    
})
app.listen(3001,()=>{
    console.log("We are listeneing")
})
