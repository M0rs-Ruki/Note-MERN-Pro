import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { log } from 'console';

dotenv.config({ path: "./.env" });

const connectDB = async () => {
    if (!process.env.MongoDB_URL || !process.env.MONGO_DB_NAME) {
        log('Error: MongoDB_URL or MONGO_DB_NAME not found in .env file.');
        process.exit(1);
    }
    
    try {
        const connectionInstance = await mongoose.connect(process.env.MongoDB_URL, {
            dbName: process.env.MONGO_DB_NAME,
        });

        log(`✅ MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        log(`❌ MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;