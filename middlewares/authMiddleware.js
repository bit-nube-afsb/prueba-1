import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SECRET;

export function authToken(req,res,next) {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        res.status(500).json({message: 'Tienes que enviar el token para realizar la petición (a través del header)'})
    }
    jwt.verify(token, secret, (err,user)=> {
        if(err){
            res.status(403).json({message: 'No autorizado'})
        }
        req.user = user;
        next();
    })
}