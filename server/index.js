import { configDotenv } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
configDotenv();

import { connectToMongoDB } from "./database/connect.db.js";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messagesRoutes);

connectToMongoDB();
app.listen(PORT, (err) => {
    if (err) console.error("An error occurred while listening on port " + PORT + ":\n" + err.message);
    else console.log("Server is listening on port " + PORT);
});
