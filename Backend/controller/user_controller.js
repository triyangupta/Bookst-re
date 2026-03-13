import User from "../model/user_model.js";

export const signup=(req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user=User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exist"})
        }
        const createUser=new User({
            fullname,
            email,
            password,
        })
        createUser.save()
        res.status(201).json({message:"User created successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

