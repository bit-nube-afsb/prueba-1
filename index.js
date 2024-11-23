import express from 'express';
import databaseConnection from "./db/config.js"
import apiRouter from "./routes/api.router.js"
import cors from "cors";
const app = express();
import dotenv from "dotenv";
// import dotenv from "dotenv/config";

dotenv.config();
const PORT = process.env.PORT || 5020;

databaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiRouter);
app.use(cors())

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
})