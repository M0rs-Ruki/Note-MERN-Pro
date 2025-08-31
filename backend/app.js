import express from 'express';
import dotenv from 'dotenv';
import { log } from 'console';
import connectDB from './src/db/connect.DB.js';
import redislimit from './src/middlewares/redisLimit.middleware.js';

dotenv.config({path:"./.env"});
const app = express();
const port = 3000;


// Connect to the database and then start the server
connectDB()
.then(() => {
    app.on("error", (err) => {
        log(`SERVER ERROR: ${err}`);
        throw err;
    });

    app.listen(port, () => {
        log(`⚡️ Server is running at http://localhost:${port}`);
    });
})
.catch((err) => {
    log(`❌ MONGODB CONNECTION FAILED: ${err}`);
});

// Middleware
app.use(express.json());
app.use(redislimit);


// Routes 
import notesRoute from './src/routes/note.Route.js';


app.use("/api/v1/notes", notesRoute);


