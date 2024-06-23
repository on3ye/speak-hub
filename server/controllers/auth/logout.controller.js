export const LogoutController = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).send({ message: "Successfully logged out!"});
    } catch (err) {
        console.error("An error occurred at the LogoutController\n" + err.message);
        return res.status(500).send({ error: err.message });
    };
}