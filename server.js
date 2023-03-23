import express from "express";
import cors from 'cors';
import { APP_PORT } from "./config";
import { router } from './routes';
import { dbConnect } from './db';
const app = express();

 
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.get('/', (req, res)=>{
    res.json({message: "Hello from server"})
})

app.use('/api', router)

// port
app.listen(APP_PORT, ()=> {
    dbConnect();
    console.log(`app running on ${APP_PORT}`)
})