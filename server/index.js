import { configDotenv } from "dotenv";
import express from "express";
configDotenv();

import { connectToMongoDB } from "./database/connect.db.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

connectToMongoDB();
app.listen(PORT, (err) => {
    if (err) console.error("An error occurred while listening on port " + PORT + ":\n" + err.message);
    else console.log("Server is listening on port " + PORT);
});
