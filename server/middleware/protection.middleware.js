import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export default async function protectRoute(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).send({ error: "You are not logged in!" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) return res.status(401).send({ error: "Invalid token!" });

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(404).send({ error: "User not found!" });

        req.user = user;
        next();
    } catch (err) {
        console.error("An error occurred at the protectRoute middleware\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
};
