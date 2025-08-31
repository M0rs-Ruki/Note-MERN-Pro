import express from "express";
import { log } from "console";
import {
    getNotes, postNotes,
    upNotes, deleteNotes,
    getNotesById, 
} from '../controllers/notes.Controller.js';
const router = express.Router();


router.get("/", getNotes );
router.get("/:id", getNotesById );
router.post("/", postNotes );
router.put("/:id", upNotes );
router.delete("/:id", deleteNotes );




export default router;
