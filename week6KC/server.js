import express from "express";
import cors from "cors";
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(cors());
const _dirname=path.resolve();

const PORT=process.env.PORT || 2023; //Read the port number in .env if there is one, otherwise use 2023

app.get('/', (req, res)=>{
    //res.send('Hello,Welcome to my server')
    res.sendFile(path.join(_dirname,'index.html'));
})

app.get('/aboutme', (req, res)=>{
    res.sendFile(path.join(_dirname,'about.html'));
})

app.get('/contactme', (req, res)=>{
    res.sendFile(path.join(_dirname,'contactme.html'));
})

app.use('*', (req,res)=>{
    res.status(404)
    res.sendFile(path.join(_dirname, '404.html'))
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})