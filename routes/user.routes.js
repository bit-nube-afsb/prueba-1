import express from "express";
import { createNewUser, listUsers, loginUser, protectedRoute } from "../controllers/user.controller.js";
import {authToken} from '../middlewares/authMiddleware.js'
const router = express.Router();

router.get('/test', (req,res) =>{
    res.send('Test route');
});

// Rutas publicas
router.post('/create-user',createNewUser);
router.post('/login',loginUser);

// Rutas protegidas
router.get('/protected-route', authToken , protectedRoute);
router.get('/get-users',authToken, listUsers);
export default router;