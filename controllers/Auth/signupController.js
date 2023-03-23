import bcrypt from 'bcrypt';
import { User } from '../../models';
import { jwtServices } from '../../services'

const signupController = {
    async signup(req, res, next) {
       try {
        const { firstName, lastName, email, password } = req.body;
        // check the existing user
        const existEmail = new Promise((resolve, reject)=>{
            User.findOne({email}, function(err, user){
                if(err){
                    reject(new Error(err))
                }
                if(user){
                    reject(new Error("Email Already Exists"))
                }
                resolve();
            })
        })

        Promise.all([existEmail]).then(()=>{
            if(password){
                bcrypt.hash(password, 10).then((hashedPassword)=>{
                    const users = new User({
                        firstName,
                        lastName,
                        email,
                        password: hashedPassword,
                    })
                  // create jwt token
                   const token = jwtServices({_id:users._id, email:users.email});
                    users.save().then((result)=>{
                        res.json({message:"Register Successfully..!", token})
                    }).catch((error)=>{
                        res.json({message: error.message})
                    })
                }).catch((error)=>{
                   return res.status(500).json({
                    error: "Enable to hashed password"
                   })
                })
            }
        }).catch(error => 
            {
                return res.status(500).json({error})
            }   
        )

       } catch (error) {
          return res.status(500).json({error})
       }
       
    }
}

export default signupController;