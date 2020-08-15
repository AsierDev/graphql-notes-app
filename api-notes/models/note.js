import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false,
        required: true
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        default: "MEDIUM"
    },
    date: {
        type: Date,
        default: Date.now
    },

});

export default mongoose.model('note', NoteSchema);