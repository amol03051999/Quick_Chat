import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  senderId:{type:mongoose.Schema,types.objectId,ref}
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema);

export default Message;