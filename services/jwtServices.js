import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const jwtServices = (payload)=>{
   return jwt.sign({payload}, JWT_SECRET, {expiresIn: '1h'})
}

export default jwtServices;