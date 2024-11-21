import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

function generateToken(user) {
    try {
        const secret = process.env.SECRET;
        const token = jwt.sign(user,secret, {expiresIn: '1h'});
        return token;
    } catch (error) {
        console.log(error);
        return "Error al crear el token";
    }
}
export default generateToken;