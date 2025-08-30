
import mongooes from 'mongoose';

const noteSchema = new mongooes.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

}, { timestamps: true })

const Note = mongooes.model('Note', noteSchema)

export default Note;