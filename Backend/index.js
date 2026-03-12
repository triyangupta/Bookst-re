import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
const app = express();

dotenv.config();

const PORT = process.env.port || 4000

const Url = process.env.mongoDBUrl;

const connectToDb = async () => {
    try {
        await mongoose.connect(Url)
        console.log("connected to mongoDB")

        app.listen(PORT, () => {
            console.log(`Server listen on port ${PORT}`);
        });
    }
    catch (error) {
        console.log("Database connection error:", error);
    }
}
connectToDb()
