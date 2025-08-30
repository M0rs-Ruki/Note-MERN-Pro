
import mongooes from 'mongoose';
import dotenv from 'dotenv';
import { log } from 'console';
dotenv.config(path="./.env");

const connectDB = async () => {
    try {
        const connectionInstance = await mongooes.connect
        (`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}`);
        log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        log(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;