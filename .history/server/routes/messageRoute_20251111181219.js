import express from 'express'
import { protectedRoute } from '../middleware/auth.js';
import { getUsersForSidebar } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get('/users',protectedRoute,getUsersForSidebar)