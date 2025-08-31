

import Note from '../models/notes.model.js';
import { log } from 'console';


const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error(`Error getting notes (get): ${error}`);
        res.status(500).json({ message:"Something went wrong in getting notes"});
    }
};

const getNotesById = async (req, res) => {
    try {
        const notes = await Note.findById(req.params.id);
        if (!notes) return res.status(404).json({message: "Note not found"});
        res.status(200).send(notes);
    } catch (error) {
        console.error(`Error getting notes (get): ${error}`);
        res.status(500).json({ message:"Something went wrong in getting notes"});
    }
}


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

const upNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },{ new: true });
        if (!updatedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).send(updatedNote);
    } catch (error) {
        console.error(`Error getting notes (Put): ${error}`);
        res.status(500).json({ message:"Something went wrong in updating notes"});
    }
};

const deleteNotes = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deleteNotes) return res.status(404).json({message: "Note not found"});
        res.status(200).send({message: "Note deleted successfully"});
    } catch (error) {
        console.error(`Error getting notes (delete): ${error}`);
        res.status(500).json({ message:"Something went wrong in Deleteing Notes"});
    }
};




export { getNotes, getNotesById, postNotes, upNotes, deleteNotes };