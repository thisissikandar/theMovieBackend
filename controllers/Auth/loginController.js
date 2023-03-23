import bcrypt from 'bcrypt';
import { User } from '../../models';
import { jwtServices } from '../../services';

const loginController = {

    async login(req, res, next){
        const { email, password } = req.body;
        try {
            if(!email || !password){
               return res.status(400).json({message:"All fields are required"})
            }
            console.log(email, password)
            User.findOne({email}).then((user)=>{

              bcrypt.compare(password, user.password).then((passwordCheck)=>{
                      if(!passwordCheck){
                        return res.status(400).json({error:"Incorrect Password"})
                      } 
                    
                    const {_id, firstName, lastName, email, password, __v, } = user;
                    const users = {firstName, lastName, email}
                    return res.status(200).json({
                        message: "Login Successfully...!",
                        users,
        
                    })
              })

            }).catch((error)=>{
                return res.status(500).json({message: error.message});
            })

        } catch (error) {
           return res.status(500).json(error)
        }
    }
}

export default loginController;