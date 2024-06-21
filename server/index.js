import { configDotenv } from "dotenv";
import express from "express";
configDotenv();

import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);

app.listen(PORT, (err) => {
    if (err) console.log("An error occurred while listening on port " + PORT);
    else console.log("Server is listening on port " + PORT);
});
