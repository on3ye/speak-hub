import mongoose from "mongoose"

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("An error occurred while connecting to MongoDB: " + err.message);
    }
}
