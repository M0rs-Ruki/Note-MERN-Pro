import express from 'express';
import { log } from 'console';


const app = express();
const port = 3000;



// Middleware


// Routes 
import notesRoute from './src/routes/note.Route.js';


app.use("/api/v1/notes", notesRoute);


app.listen(port, () => {
    log(`The server is runing on Port${port}`);
    log(`http//localhost:${port}/api/v1/notes`);
})

