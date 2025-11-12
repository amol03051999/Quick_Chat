import monggose from 'mongoose';

//function to connect the mongodb to mongoose
export const connectDB = async ()=>{
    try{
        await mongoose.connect()
    }
}