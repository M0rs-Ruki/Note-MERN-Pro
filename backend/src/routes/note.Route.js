import express from "express";
import { log } from "console";
import {
    getNotes, postNotes,
    putNotes, deleteNotes
} from '../controllers/notes.Controller.js';
const router = express.Router();


router.get("/", getNotes );
router.post("/", postNotes );
router.put("/:id", putNotes );
router.delete("/:id", deleteNotes );




export default router;
