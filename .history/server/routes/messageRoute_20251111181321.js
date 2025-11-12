import express from 'express'
import { protectedRoute } from '../middleware/auth.js';
import { getMessages, getUsersForSidebar } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/users',protectedRoute,getUsersForSidebar);
messageRouter.get('/:id',protectedRoute,getMessages);
messageRouter.put('mark/:id',protectedRoute,mark);
