import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  senderId:{type:mongoose.Schema.Types.ObjectIdbjectId, ref:'User',}
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema);

export default Message;