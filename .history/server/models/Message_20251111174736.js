import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  senderI
},{timestamps:true})

const Message = mongoose.model("Message",messageSchema);

export default Message;