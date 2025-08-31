import express from 'express';
import dotenv from 'dotenv';
import { log } from 'console';
import connectDB from './src/db/connect.DB.js';
import redisLimit from './src/middlewares/redisLimit.middleware.js';

dotenv.config({path:"./.env"});
const app = express();
const PORT = 3000;


// Middleware
app.use(express.json());
app.use(redisLimit);


// Routes 
import notesRoute from './src/routes/note.Route.js';


app.use("/api/v1/notes", notesRoute);



// Connect to the database and then start the server
const startServer = async () => {
    try {
        await connectDB();
        const server = app.listen(PORT, () => {
            console.log(`✅ Server is running successfully on port: ${PORT}`);
            console.log(`   🔗 Live at: http://localhost:${PORT}`);
        });
        server.on('error', (error) => {
            console.error(`❌ A server error occurred: ${error.message}`);
            throw error;
        });
    } catch (error) {
        console.error('❌ MongoDB connection failed! Server cannot start.', error);
        process.exit(1);
    }
};

startServer();
