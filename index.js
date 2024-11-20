import express from 'express';
import databaseConnection from "./db/config.js"
const app = express();

const PORT = 5001; //Siendo tomada desde el .env

databaseConnection();

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
})