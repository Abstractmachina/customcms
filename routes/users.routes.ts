import express from 'express';
import userController from "../controllers/userController";
import { MiddlewareFn } from '../types/myTypes';
const usersRouter = express.Router();

usersRouter.get('/users', userController.allUsers_get);


export default usersRouter;