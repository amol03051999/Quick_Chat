


//Signup new user
export const signup = async (req,res) => {
    const {fullName, email, password, bio} = req.body;

    try{
        if(!fullName || !email || !password || !bio){
            return res.json({sucess:false, message:'Missing Details'})

        }
        const user = await

    }
}