import jwt from 'jsonwebtoken'

//middleware to protect routes

export const protectedRoute = async (req,res,next)=>{

    try{
        const token = req.headers.token;

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        const user await USER
        
    }catch(error){

    }
}