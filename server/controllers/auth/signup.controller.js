import User from "../../models/user.model.js";

import { fullnameCheck } from "../../checkers/fullname.checker.js";
import { usernameCheck } from "../../checkers/username.checker.js";

export const SignupController = async (req, res) => {
    try {
        const { full_name, username, password, confirm_password, gender } = req.body;

        const fnCheck = fullnameCheck(full_name);
        const unCheck = usernameCheck(username);
        if (!fnCheck.status) return res.send({ error: fnCheck.message });
        if (!unCheck.status) return res.send({ error: unCheck.message });

        if (password.length < 8) return res.send({ error: "Password must be at least 8 characters!" });
        if (password !== confirm_password) return res.send({ error: "Passwords do not match!" });

        const user = await User.findOne({ username });
        if (user) return res.send({ error: "Username already exists!" });

        const newUser = new User({
            full_name: full_name,
            username: username,
            password: password,
            gender: gender,
            profile_picture: `${process.env.AVATAR_URI}/${(gender === "male") ? "boy" : "girl"}?username=${username}`,
        });
        await newUser.save();
        return res.send({ success: "Signup successful!" });
    } catch (err) {
        console.error("An error occurred at the SignupController\n" + err.message);
        return res.send({ error: err.message });
    };
}
