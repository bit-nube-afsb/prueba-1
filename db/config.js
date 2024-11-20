import mongoose from "mongoose";
const mongoUri = "mongodb://localhost:27017";

async function databaseConnection() {
    try {
        await mongoose.connect(mongoUri);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

export default databaseConnection;