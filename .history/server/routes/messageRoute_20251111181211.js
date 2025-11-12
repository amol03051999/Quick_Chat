import express from 'express'
import { protectedRoute } from '../middleware/auth';
import { getUsersForSidebar } from '../controllers/messageController';

const messageRouter = express.Router();

messageRouter.get('/users',protectedRoute,getUsersForSidebar)