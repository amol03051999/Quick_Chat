import monggose from 'mongoose';

//function to connect the mongodb to mongoose
export const connectDB = async ()=>{
    try{
        mongoose.connection
        await mongoose.connect(`${process.env.MONGODB_URI}/fastchat`)
    }catch(error){

    }
}