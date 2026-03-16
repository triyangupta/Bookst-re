import User from "../model/user_model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exist" })
        }
        const hashPassword= await bcryptjs.hash(password,10)
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        })
        await createUser.save()
        res.status(201).json({ message: "User created successfully",user:{
            _id:createUser._id,
            fullname:createUser.fullname,
            email:createUser.email,
        } 
    })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
         if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
       const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        else{
            res.status(200).json({message:"Login Sucessfull",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            }
        })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

