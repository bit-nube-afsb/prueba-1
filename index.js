import express from 'express';
import databaseConnection from "./db/config.js"
import apiRouter from "./routes/api.router.js"
const app = express();
import dotenv from "dotenv";
// import dotenv from "dotenv/config";

dotenv.config();
const PORT = process.env.PORT || 5020;

databaseConnection();

app.use(apiRouter);

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
})