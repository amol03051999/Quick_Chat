import express from 'express';
import { login, signup } from '../controllers/userController';
import { protectedRoute } from '../middleware/auth';

const userRouter = express.Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.put('/update-profile',protectedRoute);
