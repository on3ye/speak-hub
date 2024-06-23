import express from "express";

import protectRoute from "../middleware/protection.middleware.js";
import { SendController } from "../controllers/messages/send.controller.js";
import { FetchController } from "../controllers/messages/fetch.controller.js";

const router = express.Router();

router.get('/fetch', protectRoute, FetchController);
router.post('/send', protectRoute , SendController);

export default router;
