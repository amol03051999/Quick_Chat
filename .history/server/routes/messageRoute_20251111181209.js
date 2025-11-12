import express from 'express'
import { protectedRoute } from '../middleware/auth';

const messageRouter = express.Router();

messageRouter.get('/users',protectedRoute,getUserF)