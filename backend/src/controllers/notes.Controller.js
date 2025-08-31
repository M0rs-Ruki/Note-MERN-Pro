

import Note from '../models/notes.model.js';
import { log } from 'console';


const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();    
        res.status(200).json(notes);
    } catch (error) {
        console.error(`Error getting notes (get): ${error}`);
        res.status(500).json({ message:"Something went wrong in getting notes"});
    }
};

const postNotes = async (req, res) => {
    try {

        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({message: "Title and content are required"})
        const newNote = new Note({ title, content });

        const notes = await newNote.save();
        res.status(201).json( notes );

    } catch (error) {
        console.error(`Error getting notes (post): ${error}`);
        res.status(500).json({ message:"Something went wrong in posting notes"});
    }
};

const putNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, content });
        res.status(200).send({message:"Notes is updated successfully"});
    } catch (error) {
        console.error(`Error getting notes (Put): ${error}`);
        res.status(500).json({ message:"Something went wrong in updating notes"});
    }
};

const deleteNotes = async (req, res) => {
    res.status(200).send("Notes is deleted successfully");
};


export { getNotes, postNotes, putNotes, deleteNotes };