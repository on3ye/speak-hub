import express from "express";

import { SignupController } from "../controllers/auth/signup.controller.js";

const router = express.Router();

router.post('/signup', SignupController);
// router.post('/login', LoginController);
// router.post('/logout', LogoutController);

export default router;
