import { generateToken } from "../lib/utils";
import User from "../models/User";
import bcrypt from 'bcryptjs'



//Signup new user
export const signup = async (req,res) => {
    const {fullName, email, password, bio} = req.body;

    try{
        if(!fullName || !email || !password || !bio){
            return res.json({sucess:false, message:'Missing Details'})

        }
        const user = await User.findOne({email});
        if(user){
            return res.json({sucess:false, message:'Account already exists'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            fullName, email, password:hashedPassword, bio
    });

    const token = generateToken

    }catch(error){
        console.log(error)
    }
}