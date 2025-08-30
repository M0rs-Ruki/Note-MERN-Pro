import express from 'express';
import dotenv from 'dotenv';
import { log } from 'console';
import path from 'path';
import connectDB from './src/db/connect.db.js';

dotenv.config(path="./.env");
const app = express();
const port = 3000;


// Database Connexion
connectDB()
.then(() => {
    app.listen(port, () => {
        log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
    })
    app.on("error", (err) => {
        log(`⚡️[server]: Server error: ${err}`)
    });
})
.catch((err) => {
    log(`⚡️[MONGODB]:error: ${err}`)
});

// Middleware


// Routes 
import notesRoute from './src/routes/note.Route.js';


app.use("/api/v1/notes", notesRoute);


