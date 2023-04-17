import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    answer: {
        type: String,
        required :true,
    },
    points: {
        type: Number,
        required: true,
    },
})

const Problem = new mongoose.model('Problem', problemSchema)

export default Problem;