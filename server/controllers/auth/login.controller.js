import bcrypt from "bcrypt";

import User from "../../models/user.model.js";
import generateToken from "../../utils/generate.token.js";

export const LoginController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        const pwdCheck = await bcrypt.compare(password, user?.password || "");
        
        if (!user) return res.status(404).send({ error: "User not found!" });
        if (!pwdCheck) return res.status(401).send({ error: "Invalid password!" });

        generateToken(user._id, res);

        return res.status(200).json({
            _id: user._id,
            full_name: user.full_name,
            username: user.username,
            gender: user.gender,
        });
    } catch (err) {
        console.error("An error occurred at the LoginController\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
}