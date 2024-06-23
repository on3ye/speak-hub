import express from "express";

import protectRoute from "../middleware/protection.middleware.js";
import { SendController } from "../controllers/messages/sendMessage.controller.js";

const router = express.Router();

router.post('/send', protectRoute , SendController);

export default router;
