import mongoose from "mongoose";

export const database = async () => {
    const mongoUrl = process.env.MONGO_URL
    try {
        mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database connected.');
    } catch (error) {
        console.log({ 'Database Error: ': error.message });
    }
}