import { User } from '../../models';
import bcrypt from 'bcrypt';

async function forgotPassword(req, res, next){
    const { email, password } = req.body;
    try {
        User.findOne({email}).then((user)=>{

           bcrypt.hash(password, 10).then((hashedPassword)=>{
                 User.updateOne({email})
           })

        }).catch((error)=>{
            return res.status(404).json({message: "username not found", error})
        })
    } catch (error) {
        
    }

}

export default forgotPassword;