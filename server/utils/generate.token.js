import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
    res.cookie("token", token, { 
        maxAge: 15 * 24 * 3600 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === "production",
    });
    return token;
}

export default generateToken;
