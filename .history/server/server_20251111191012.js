import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import http from 'http';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import {server} from 'socket.io'

//create express app and HTTP server
const app = express();
const server = http.createServer(app);

//initialize socket.io server
export const io = new (server,{
    cors:{origin:"*"}
})

//store online users
export const userSocketMap = {}  //{userId:socketId}

//socket.io connection handler
io.on("connection",(socket)=>{
    const userId = socket.handshake
})

//middleware setup
app.use(express.json({limit:'4mb'}));
app.use(cors());

//routes setup
app.use('/api/status',(req,res)=> res.send('Server is live'));
app.use('/api/auth',userRouter);
app.use('/api/messages',messageRouter)

//connect to mongoDB
await connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=> console.log('server running on PORT:' + PORT));


