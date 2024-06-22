export const SignupController = async (req, res) => {
    try {
        const { full_name, username, password, confirm_password, gender } = req.body;

        if (!full_name || !username || !password || !confirm_password || !gender) return res.send({ error: "Please fill in all fields!" });
        if (password !== confirm_password) return res.send({ error: "Passwords do not match!" });
        if (password.length < 8) return res.send({ error: "Password must be at least 8 characters long!" });
        if (username.match(/^[a-zA-Z\-]+$/) == null) return res.send({ error: "Usernames can only contain lowercase letters, numbers, (.) and (_)!"})

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
