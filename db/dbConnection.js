import mongoose from 'mongoose';
import { MONGO_DB_URL } from '../config';

async function dbConnect(){
  mongoose.connect(MONGO_DB_URL).then(()=>{
    console.log("database connected")
  }).catch((err)=>{
    console.log(err)
  })
}

export default dbConnect;