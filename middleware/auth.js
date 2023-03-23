import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

const auth = (payload) =>{
    return jwt.verify({})
}