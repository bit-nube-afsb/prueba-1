import express from "express";
import { createNewUser, listUsers, loginUser, protectedRoute, getOneUserById, deleteAllUsersController, deleteOneUserById, updateOneUserById } from "../controllers/user.controller.js";
import {authToken} from '../middlewares/authMiddleware.js'
const router = express.Router();

router.get('/test', (req,res) =>{
    res.send('Test route');
});

// Rutas publicas
router.post('/create-user',createNewUser);
router.post('/login',loginUser);
router.get('/user/:id', getOneUserById);
router.put('/user/:id', updateOneUserById);
router.delete('/user/:id', deleteOneUserById);
router.delete('/users', deleteAllUsersController);

// Rutas protegidas
router.get('/protected-route', authToken , protectedRoute);
router.get('/get-users',authToken, listUsers);
export default router;