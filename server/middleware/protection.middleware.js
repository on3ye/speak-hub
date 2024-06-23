export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).send({ error: "You are not logged in!" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) res.status(401).send({ error: "Invalid token!" });

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) res.status(404).send({ error: "User not found!" });

        req.user = user;
        next();
    } catch (err) {
        console.error("An error occurred at the protectRoute middleware\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
};
