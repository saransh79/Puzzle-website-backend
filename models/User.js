import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    score: {
        type: Array,
        required: true,
    },
    timeTaken:{
        type: Array,
        required: true,
    },
    profileChar: {
        type: Array,
        required: true
    }
})

const User = new mongoose.model('User', userSchema)

export default User;