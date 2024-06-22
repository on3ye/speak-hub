import bcrypt from "bcrypt";
import User from "../../models/user.model.js";

import { fullnameCheck } from "../../checkers/fullname.checker.js";
import { usernameCheck } from "../../checkers/username.checker.js";
import generateToken from "../../utils/generate.token.js";

export const SignupController = async (req, res) => {
    try {
        const { full_name, username, password, confirm_password, gender } = req.body;

        const fnCheck = fullnameCheck(full_name);
        const unCheck = usernameCheck(username);
        if (!fnCheck.status) return res.status(401).send({ error: fnCheck.message });
        if (!unCheck.status) return res.status(401).send({ error: unCheck.message });

        if (password.length < 8) return res.status(401).send({ error: "Password must be at least 8 characters!" });
        if (password !== confirm_password) return res.status(401).send({ error: "Passwords do not match!" });

        const user = await User.findOne({ username });
        if (user) return res.status(409).send({ error: "Username already exists!" });

        var newUserId;
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) return res.status(500).send({ error: "An error occurred while hashing the password: " + err.message });
            const newUser = new User({
                full_name: full_name,
                username: username,
                password: hash,
                gender: gender,
                profile_picture: `${process.env.AVATAR_URI}/${(gender === "male") ? "boy" : "girl"}?username=${username}`,
            });
            newUserId = newUser._id;
            await newUser.save();
        });

        generateToken(newUserId, res);
        return res.status(200).send({ success: "Signup successful!" });
    } catch (err) {
        console.error("An error occurred at the SignupController\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
}
