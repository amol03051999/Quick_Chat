import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{type:String, required:true,unique:true},
    fullName:{type:String, required:true},
    password:{type:String, required:true,min:true},
    email:{type:String, required:true,unique:true},
    email:{type:String, required:true,unique:true},
})