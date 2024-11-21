import express from "express";
import { listUsers } from "../controllers/user.controller.js";
const router = express.Router();

router.get('/test', (req,res) =>{
    res.send('Test route');
});

router.get('/get-users',listUsers)

export default router;